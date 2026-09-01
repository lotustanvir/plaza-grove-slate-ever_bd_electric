import { n as clamp, o as lerp, t as bstParts } from "./format-BJ0h-eCC.mjs";
import { c as INSTALLED, h as ZONES, r as BASE_DEPLOYMENTS } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-C5Gy9dQo.js
var DEMAND_SHAPE = [
	.68,
	.645,
	.62,
	.61,
	.625,
	.67,
	.76,
	.835,
	.875,
	.9,
	.915,
	.93,
	.945,
	.94,
	.925,
	.915,
	.94,
	.985,
	1,
	.975,
	.91,
	.845,
	.775,
	.72
];
var PEAK_DEMAND = 17601;
var BASE_SUPPLY_RATIO = .887;
function sampleShape(hourFrac, shape) {
	const h = (hourFrac % 24 + 24) % 24;
	const i0 = Math.floor(h) % 24;
	const i1 = (i0 + 1) % 24;
	return lerp(shape[i0], shape[i1], h - i0);
}
function solarIrradiance(hourFrac) {
	const sunrise = 5.7;
	if (hourFrac < sunrise || hourFrac > 18.2) return 0;
	const t = (hourFrac - sunrise) / 12.5;
	return Math.sin(Math.PI * t);
}
function hashTick(n) {
	const x = Math.sin(n * 12.9898) * 43758.5453;
	return x - Math.floor(x);
}
function buildHourly(now = /* @__PURE__ */ new Date()) {
	const { hour } = bstParts(now);
	return Array.from({ length: 24 }, (_, i) => {
		const h = (hour + i) % 24;
		const demand = Math.round(PEAK_DEMAND * DEMAND_SHAPE[h]);
		const sun = solarIrradiance(h + .5);
		const solar = Math.round(INSTALLED.solar * sun * .62);
		const wind = Math.round(26 + 18 * (1 - sun) + h % 5 * 1.4);
		const thermalHeadroom = h >= 17 && h <= 21 ? .9 : .86;
		const supply = Math.round(demand * BASE_SUPPLY_RATIO + solar * .4 + wind * .2 + thermalHeadroom * 400);
		const temp = 27 + 5 * sun - (h < 6 ? 2 : 0);
		return {
			hour: h,
			label: `${String(h).padStart(2, "0")}:00`,
			demand,
			supply: Math.min(supply, demand + 80),
			solar,
			wind,
			tempC: Number(temp.toFixed(1))
		};
	});
}
function snapshot(now = /* @__PURE__ */ new Date(), live = false) {
	const bst = bstParts(now);
	const shape = sampleShape(bst.hourFrac, DEMAND_SHAPE);
	const jitter = live ? (hashTick(Math.floor(now.getTime() / 4e3)) - .5) * 80 : 0;
	const demand = Math.round(PEAK_DEMAND * shape + jitter);
	const sun = solarIrradiance(bst.hourFrac);
	const solar = Math.round(INSTALLED.solar * sun * .62 + (live ? jitter * .05 : 0));
	const wind = Math.round(22 + 20 * (1 - sun * .4) + (live ? jitter * .04 : 0));
	const hydro = 221;
	const gas = Math.round(4820 + 420 * shape);
	const coal = Math.round(4620 + 380 * shape);
	const mix = {
		gas,
		liquid: Math.round(2420 + 980 * Math.max(0, shape - .78) * 5),
		coal,
		hydro,
		solar: Math.max(0, solar),
		wind: Math.max(0, wind),
		hvdc: 980,
		otherImport: 260
	};
	const supply = Object.values(mix).reduce((s, v) => s + v, 0);
	const deficit = Math.max(0, demand - supply);
	const shedding = Math.round(deficit);
	const frequency = clamp(50 - deficit / 18e3, 49.72, 50.18);
	let risk = "LOW";
	if (shedding > 2800) risk = "HIGH";
	else if (shedding > 1500) risk = "MODERATE";
	else if (shedding > 600) risk = "LOW";
	const status = shedding > 2500 ? "SHEDDING" : shedding > 1200 ? "STRESSED" : shedding > 400 ? "WATCH" : "STABLE";
	const remarks = shedding > 0 ? `Evening-peak bias. ${shedding.toLocaleString()} MW of unserved energy remaining after thermal, hydro and imports. LoadShield recommends renewable + biomass support in Rangpur, Sylhet and Khulna first.` : "Supply covers demand. Keep Kaptai and HVDC on schedule; solar falling after 16:00 BST.";
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
		timestamp: bst.label
	};
}
function solarNow(hourFrac) {
	const sun = solarIrradiance(hourFrac);
	const radiation = sun * 980;
	const best = [...ZONES].sort((a, b) => b.solarMwh - a.solarMwh)[0];
	const ranking = [...ZONES].map((z) => ({
		zone: z.name,
		expected: z.solarMwh,
		gen: Number((z.solarGenPerMw * sun).toFixed(3)),
		rank: z.rank
	})).sort((a, b) => b.expected - a.expected).map((z, i) => ({
		...z,
		rank: i + 1
	}));
	return {
		radiation,
		capacityFactor: sun * .62,
		bestZone: best.name,
		bestEnergy: best.solarMwh,
		opportunity: {
			zone: best.name,
			radiation: Number((radiation * (best.solarMwh / 4.2)).toFixed(1)),
			gen: Number((best.solarGenPerMw * Math.max(sun, .05)).toFixed(3)),
			hour: sun > 0 ? Math.round(11 + (1 - sun) * 2) : 11
		},
		ranking
	};
}
function windNow() {
	const best = [...ZONES].sort((a, b) => b.windMwh - a.windMwh)[0];
	const ranking = [...ZONES].map((z) => ({
		zone: z.name,
		expected: z.windMwh,
		cf: z.windCf,
		rank: z.rank
	})).sort((a, b) => b.expected - a.expected).map((z, i) => ({
		...z,
		rank: i + 1
	}));
	return {
		bestZone: best.name,
		bestEnergy: best.windMwh,
		bestCf: best.windCf,
		opportunity: {
			zone: "Dhaka",
			speed: 23.8,
			gen: 1
		},
		ranking
	};
}
function loadShieldSupport() {
	const total = BASE_DEPLOYMENTS.reduce((s, d) => s + d.supportMw, 0);
	return {
		total: Number(total.toFixed(1)),
		rows: BASE_DEPLOYMENTS
	};
}
//#endregion
export { windNow as a, solarNow as i, loadShieldSupport as n, snapshot as r, buildHourly as t };
