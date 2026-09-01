import { BASE_DEPLOYMENTS, INSTALLED, ZONES } from "./data";
import { bstParts, clamp, lerp } from "./format";
import type { GenerationMix, GridSnapshot, HourlyPoint, RiskLevel } from "./types";

const DEMAND_SHAPE = [
  0.68, 0.645, 0.62, 0.61, 0.625, 0.67, 0.76, 0.835, 0.875, 0.9, 0.915, 0.93,
  0.945, 0.94, 0.925, 0.915, 0.94, 0.985, 1.0, 0.975, 0.91, 0.845, 0.775, 0.72,
];

const PEAK_DEMAND = 17_601;
const BASE_SUPPLY_RATIO = 0.887;

function sampleShape(hourFrac: number, shape: number[]) {
  const h = ((hourFrac % 24) + 24) % 24;
  const i0 = Math.floor(h) % 24;
  const i1 = (i0 + 1) % 24;
  return lerp(shape[i0]!, shape[i1]!, h - i0);
}

function solarIrradiance(hourFrac: number) {
  const sunrise = 5.7;
  const sunset = 18.2;
  if (hourFrac < sunrise || hourFrac > sunset) return 0;
  const t = (hourFrac - sunrise) / (sunset - sunrise);
  return Math.sin(Math.PI * t);
}

function hashTick(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function buildHourly(now = new Date()): HourlyPoint[] {
  const { hour } = bstParts(now);
  return Array.from({ length: 24 }, (_, i) => {
    const h = (hour + i) % 24;
    const demand = Math.round(PEAK_DEMAND * DEMAND_SHAPE[h]!);
    const sun = solarIrradiance(h + 0.5);
    const solar = Math.round(INSTALLED.solar * sun * 0.62);
    const wind = Math.round(26 + 18 * (1 - sun) + (h % 5) * 1.4);
    const thermalHeadroom = h >= 17 && h <= 21 ? 0.9 : 0.86;
    const supply = Math.round(
      demand * BASE_SUPPLY_RATIO + solar * 0.4 + wind * 0.2 + thermalHeadroom * 400,
    );
    const temp = 27 + 5 * sun - (h < 6 ? 2 : 0);
    return {
      hour: h,
      label: `${String(h).padStart(2, "0")}:00`,
      demand,
      supply: Math.min(supply, demand + 80),
      solar,
      wind,
      tempC: Number(temp.toFixed(1)),
    };
  });
}

export function snapshot(now = new Date(), live = false): GridSnapshot {
  const bst = bstParts(now);
  const shape = sampleShape(bst.hourFrac, DEMAND_SHAPE);
  const jitter = live ? (hashTick(Math.floor(now.getTime() / 4000)) - 0.5) * 80 : 0;
  const demand = Math.round(PEAK_DEMAND * shape + jitter);
  const sun = solarIrradiance(bst.hourFrac);
  const solar = Math.round(INSTALLED.solar * sun * 0.62 + (live ? jitter * 0.05 : 0));
  const wind = Math.round(22 + 20 * (1 - sun * 0.4) + (live ? jitter * 0.04 : 0));
  const hydro = 221;
  const gas = Math.round(4_820 + 420 * shape);
  const coal = Math.round(4_620 + 380 * shape);
  const liquid = Math.round(2_420 + 980 * Math.max(0, shape - 0.78) * 5);
  const hvdc = 980;
  const otherImport = 260;
  const mix: GenerationMix = {
    gas,
    liquid,
    coal,
    hydro,
    solar: Math.max(0, solar),
    wind: Math.max(0, wind),
    hvdc,
    otherImport,
  };
  const supply = Object.values(mix).reduce((s, v) => s + v, 0);
  const deficit = Math.max(0, demand - supply);
  const shedding = Math.round(deficit);
  const frequency = clamp(50 - deficit / 18_000, 49.72, 50.18);
  let risk: RiskLevel = "LOW";
  if (shedding > 2800) risk = "HIGH";
  else if (shedding > 1500) risk = "MODERATE";
  else if (shedding > 600) risk = "LOW";
  const status =
    shedding > 2500 ? "SHEDDING" : shedding > 1200 ? "STRESSED" : shedding > 400 ? "WATCH" : "STABLE";

  const remarks =
    shedding > 0
      ? `Evening-peak bias. ${shedding.toLocaleString()} MW of unserved energy remaining after thermal, hydro and imports. LoadShield recommends renewable + biomass support in Rangpur, Sylhet and Khulna first.`
      : "Supply covers demand. Keep Kaptai and HVDC on schedule; solar falling after 16:00 BST.";

  return {
    demand,
    supply,
    deficit,
    shedding,
    frequency: Number(frequency.toFixed(2)),
    status,
    risk,
    mix,
    remarks,
    timestamp: bst.label,
  };
}

export function solarNow(hourFrac: number) {
  const sun = solarIrradiance(hourFrac);
  const radiation = sun * 980;
  const best = [...ZONES].sort((a, b) => b.solarMwh - a.solarMwh)[0]!;
  const ranking = [...ZONES]
    .map((z) => ({
      zone: z.name,
      expected: z.solarMwh,
      gen: Number((z.solarGenPerMw * sun).toFixed(3)),
      rank: z.rank,
    }))
    .sort((a, b) => b.expected - a.expected)
    .map((z, i) => ({ ...z, rank: i + 1 }));
  return {
    radiation,
    capacityFactor: sun * 0.62,
    bestZone: best.name,
    bestEnergy: best.solarMwh,
    opportunity: {
      zone: best.name,
      radiation: Number((radiation * (best.solarMwh / 4.2)).toFixed(1)),
      gen: Number((best.solarGenPerMw * Math.max(sun, 0.05)).toFixed(3)),
      hour: sun > 0 ? Math.round(11 + (1 - sun) * 2) : 11,
    },
    ranking,
  };
}

export function windNow() {
  const best = [...ZONES].sort((a, b) => b.windMwh - a.windMwh)[0]!;
  const ranking = [...ZONES]
    .map((z) => ({
      zone: z.name,
      expected: z.windMwh,
      cf: z.windCf,
      rank: z.rank,
    }))
    .sort((a, b) => b.expected - a.expected)
    .map((z, i) => ({ ...z, rank: i + 1 }));
  return {
    bestZone: best.name,
    bestEnergy: best.windMwh,
    bestCf: best.windCf,
    opportunity: {
      zone: "Dhaka" as const,
      speed: 23.8,
      gen: 1.0,
    },
    ranking,
  };
}

export function loadShieldSupport() {
  const total = BASE_DEPLOYMENTS.reduce((s, d) => s + d.supportMw, 0);
  return { total: Number(total.toFixed(1)), rows: BASE_DEPLOYMENTS };
}
