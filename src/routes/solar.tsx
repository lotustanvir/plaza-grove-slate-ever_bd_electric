import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Kpi } from "@/components/kpi";
import { SolarDayChart, ZoneScoreChart } from "@/components/charts";
import { useLiveGrid } from "@/hooks/use-live";
import { solarNow } from "@/lib/live";
import { ZONES } from "@/lib/data";
import { fmtNum } from "@/lib/format";

export const Route = createFileRoute("/solar")({ component: SolarPage });

const STEPS = [
  {
    title: "Weather ingest",
    body: "Open-Meteo GHI, DNI, DHI, cloud fraction, aerosol and humidity for every hour on a seven-day horizon.",
  },
  {
    title: "Zone mapping",
    body: "Nine PGCB zones keep separate weights. Irradiance is interpolated to zone centroids before scoring.",
  },
  {
    title: "Gradient-boosted forecast",
    body: "Features include solar zenith, cloud, AOD and humidity. Output is MW per 1 MW installed plus a 24 h energy total.",
  },
  {
    title: "Ranking",
    body: "Zones ordered by expected MWh per installed megawatt so siting and LoadShield share the same score.",
  },
];

function SolarPage() {
  const { hourly, bst } = useLiveGrid();
  const solar = solarNow(bst.hourFrac);

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Renewable intelligence"
        title="Solar AI"
        description="Weather-aware generation forecasts for Bangladesh. Night output is zero; the ranking still uses the next 24-hour energy envelope."
        badge="LIVE"
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Best zone" value={solar.bestZone} />
        <Kpi label="Expected energy" value={solar.bestEnergy.toFixed(2)} unit="MWh / 1 MW" />
        <Kpi label="Radiation now" value={fmtNum(solar.opportunity.radiation, 0)} unit="W/m²" />
        <Kpi label="Predicted gen / 1 MW" value={solar.opportunity.gen.toFixed(3)} />
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>National solar output · 24 h</CardTitle>
            <CardDesc>Installed utility solar following the tropical GHI envelope.</CardDesc>
          </div>
        </CardHeader>
        <SolarDayChart data={hourly} />
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Zone ranking</CardTitle>
            <CardDesc>Expected energy MWh per 1 MW installed over 24 hours.</CardDesc>
          </div>
        </CardHeader>
        <ZoneScoreChart
          rows={ZONES.map((z) => ({ name: z.name, solar: z.solarMwh, wind: 0 }))}
        />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="pb-2 pr-3 font-medium">Rank</th>
                <th className="pb-2 pr-3 font-medium">Zone</th>
                <th className="pb-2 pr-3 font-medium">MWh / 1 MW · 24 h</th>
                <th className="pb-2 font-medium">MW per 1 MW (peak hour)</th>
              </tr>
            </thead>
            <tbody>
              {solar.ranking.map((row) => (
                <tr key={row.zone} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-mono tabular-nums text-muted">{row.rank}</td>
                  <td className="py-2 pr-3">{row.zone}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{row.expected.toFixed(2)}</td>
                  <td className="py-2 font-mono tabular-nums">{row.gen.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {STEPS.map((s, i) => (
          <Card key={s.title}>
            <p className="font-mono text-xs text-subtle">0{i + 1}</p>
            <h3 className="mt-2 text-base font-medium">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
