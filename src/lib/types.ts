export type RiskLevel = "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
export type GridStatus = "STABLE" | "WATCH" | "STRESSED" | "SHEDDING";
export type DataClass =
  | "OFFICIAL_PGCB"
  | "LIVE"
  | "MODEL_FORECAST"
  | "CALCULATED"
  | "PROJECT"
  | "PROTOTYPE";

export type ZoneName =
  | "Rangpur"
  | "Sylhet"
  | "Khulna"
  | "Mymensingh"
  | "Dhaka"
  | "Rajshahi"
  | "Comilla"
  | "Barishal"
  | "Chittagong";

export interface ZoneRecord {
  name: ZoneName;
  lat: number;
  lon: number;
  solarMwh: number;
  windMwh: number;
  windCf: number;
  solarGenPerMw: number;
  windGenPerMw: number;
  biomassMw: number;
  biomassMwhYear: number;
  wasteMw: number;
  wasteMwhYear: number;
  score: number;
  rank: number;
  blurb: string;
}

export interface HourlyPoint {
  hour: number;
  label: string;
  demand: number;
  supply: number;
  solar: number;
  wind: number;
  tempC: number;
}

export interface GenerationMix {
  gas: number;
  liquid: number;
  coal: number;
  hydro: number;
  solar: number;
  wind: number;
  hvdc: number;
  otherImport: number;
}

export interface GridSnapshot {
  demand: number;
  supply: number;
  deficit: number;
  shedding: number;
  frequency: number;
  status: GridStatus;
  risk: RiskLevel;
  mix: GenerationMix;
  remarks: string;
  timestamp: string;
}

export interface Deployment {
  rank: number;
  zone: ZoneName | "System-wide";
  resource: string;
  supportMw: number;
  reason: string;
}

export interface ResourceCard {
  id: string;
  name: string;
  generationMw: number | null;
  availableMw: number | null;
  installedMw: number | null;
  status: string;
  classification: DataClass;
  note: string;
}

export interface HistoryRow {
  id: number;
  time: string;
  demand: number;
  supply: number;
  shedding: number;
  deficit: number;
  gas: number;
  coal: number;
  liquid: number;
  hydro: number;
  solar: number;
  wind: number;
  status: GridStatus;
  risk: RiskLevel;
}
