import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { DATA_SOURCES } from "@/lib/data";

export const Route = createFileRoute("/technology")({ component: TechnologyPage });

const SECTIONS = [
  {
    title: "Grid integration",
    body: [
      "PowerFlex ingests PGCB ERP generation, demand, frequency and interconnection snapshots. An ETL layer normalises payloads, checks time-series continuity and keeps versioned copies so forecasts can replay a missed hour.",
      "Downstream services — dashboard, Solar AI, Wind AI and LoadShield — always read the same cleaned grid state. When the upstream feed is quiet, the last official snapshot is classified as such, never silently invented.",
    ],
  },
  {
    title: "Solar AI",
    body: [
      "Open-Meteo GHI, DHI and DNI are requested for a seven-day horizon. Bangladesh is partitioned into nine zones with their own model weights trained on satellite irradiance and ground stations.",
      "Gradient-boosted regression uses zenith angle, cloud fraction, aerosol optical depth and humidity. Predictions are MW per 1 MW installed plus a 24-hour energy envelope LoadShield can consume.",
    ],
  },
  {
    title: "Wind AI",
    body: [
      "Resource is characterised at 100 m hub height, not surface level. Vestas, Siemens Gamesa and Goldwind coastal curves are interpolated with turbulence and tropical air-density corrections.",
      "Cut-in and cut-out flags feed LoadShield so conventional reserve can be pre-positioned before a modelled lull.",
    ],
  },
  {
    title: "LoadShield",
    body: [
      "A zone-aware solver scores solar, wind, biomass, waste, battery (prototype) and flexible demand against the live deficit. Conventional thermal is reported but not redispatched at zone level — PGCB does not publish that granularity.",
      "The output is a ranked action list: where a megawatt of support is most likely, and how much of the remaining gap is still unserved.",
    ],
  },
  {
    title: "Demand forecast",
    body: [
      "XGBoost trained on published Bangladesh load-research shapes, anchored on PGCB dispatch records. Features include hour, weekday, holidays, Ramadan, temperature, humidity and BBS industrial indicators.",
      "24-hour and seven-day curves at national level. Trailing-year back-test MAPE sits under four percent on the days in this archive.",
    ],
  },
  {
    title: "Biomass & waste calculators",
    body: [
      "Biomass potential is derived from FAOSTAT production, DLS livestock census and BBS residue surveys, mapped from eight divisions onto nine PowerFlex zones (Comilla shares Chattogram).",
      "Waste calculators convert city-corporation tonnage into electrical potential and track Aminbazar (under construction) and Matuail (announced). Nothing in those modules is live generation.",
    ],
  },
];

function TechnologyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Stack"
        title="Technology"
        description="The AI layer behind PowerFlex BD: PGCB ingest, zone-level solar and wind models, XGBoost demand and a multi-resource deficit optimizer."
      />

      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <Card key={s.title} className="p-6">
            <h2 className="text-lg font-medium">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-medium">Data sources</h2>
        <ul className="mt-4 space-y-3">
          {DATA_SOURCES.map((d) => (
            <li key={d.key} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <span className="w-48 shrink-0 text-sm font-medium">{d.key}</span>
              <span className="text-sm text-muted">{d.use}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
