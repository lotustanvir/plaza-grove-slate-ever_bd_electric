import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Kpi } from "@/components/kpi";
import { ZoneScoreChart } from "@/components/charts";
import { windNow } from "@/lib/live";
import { TURBINE, ZONES } from "@/lib/data";
import { fmtPct } from "@/lib/format";

export const Route = createFileRoute("/wind")({ component: WindPage });

function WindPage() {
  const wind = windNow();

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Renewable intelligence"
        title="Wind AI"
        description="100-metre hub-height resource with manufacturer power curves corrected for tropical air density. Snapshot ranks Rangpur, Sylhet and Khulna first."
        badge="LIVE"
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Best zone" value={wind.bestZone} />
        <Kpi label="Expected energy" value={wind.bestEnergy.toFixed(2)} unit="MWh / 1 MW" />
        <Kpi label="Capacity factor" value={fmtPct(wind.bestCf)} />
        <Kpi label="Best hourly slot" value={wind.opportunity.zone} hint={`${wind.opportunity.speed} km/h @ 100 m`} />
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Zone ranking</CardTitle>
            <CardDesc>Modelled energy and capacity factor at 100 m hub height.</CardDesc>
          </div>
        </CardHeader>
        <ZoneScoreChart rows={ZONES.map((z) => ({ name: z.name, solar: 0, wind: z.windMwh }))} />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="pb-2 pr-3 font-medium">Rank</th>
                <th className="pb-2 pr-3 font-medium">Zone</th>
                <th className="pb-2 pr-3 font-medium">MWh / 1 MW · 24 h</th>
                <th className="pb-2 font-medium">Capacity factor</th>
              </tr>
            </thead>
            <tbody>
              {wind.ranking.map((row) => (
                <tr key={row.zone} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-mono tabular-nums text-muted">{row.rank}</td>
                  <td className="py-2 pr-3">{row.zone}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{row.expected.toFixed(2)}</td>
                  <td className="py-2 font-mono tabular-nums">{fmtPct(row.cf)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Turbine assumption</CardTitle>
            <CardDesc>Coastal South-Asia library interpolated to hub height.</CardDesc>
          </div>
        </CardHeader>
        <dl className="grid gap-3 sm:grid-cols-2">
          {Object.entries(TURBINE).map(([k, v]) => (
            <div key={k} className="rounded-md bg-elevated px-3 py-3">
              <dt className="text-xs uppercase tracking-wider text-subtle">{k.replace(/_/g, " ")}</dt>
              <dd className="mt-1 text-sm">{String(v)}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
