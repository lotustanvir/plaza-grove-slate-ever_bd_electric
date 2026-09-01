import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { Kpi } from "@/components/kpi";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DemandChart, MixBars } from "@/components/charts";
import { DataClassBadge } from "@/components/data-class";
import { useLiveGrid } from "@/hooks/use-live";
import { fmtMw, fmtNum, fmtPct } from "@/lib/format";
import { ZONES } from "@/lib/data";
import { loadShieldSupport, solarNow, windNow } from "@/lib/live";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function riskTone(risk: string) {
  if (risk === "HIGH" || risk === "CRITICAL") return "danger" as const;
  if (risk === "MODERATE") return "warn" as const;
  return "ok" as const;
}

function Dashboard() {
  const { grid, hourly, bst } = useLiveGrid();
  const solar = solarNow(bst.hourFrac);
  const wind = windNow();
  const shield = loadShieldSupport();
  const remaining = Math.max(0, grid.deficit - Math.min(grid.deficit, 1916));

  const mixRows = useMemo(
    () => [
      { name: "Gas", value: grid.mix.gas, fill: "var(--color-muted)" },
      { name: "Coal", value: grid.mix.coal, fill: "var(--color-foreground)" },
      { name: "Liquid", value: grid.mix.liquid, fill: "var(--color-warn)" },
      { name: "HVDC", value: grid.mix.hvdc, fill: "var(--color-accent)" },
      { name: "Hydro", value: grid.mix.hydro, fill: "var(--color-ok)" },
      { name: "Solar", value: grid.mix.solar, fill: "var(--color-accent)" },
      { name: "Wind", value: grid.mix.wind, fill: "var(--color-ok)" },
      { name: "Import", value: grid.mix.otherImport, fill: "var(--color-subtle)" },
    ],
    [grid.mix],
  );

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="National dispatch"
        title="Power intelligence dashboard"
        description="Live Bangladesh grid snapshot with AI solar, wind and LoadShield overlays. Figures follow Asia/Dhaka."
        badge="OFFICIAL_PGCB"
        extra={
          <span className="font-mono text-xs tabular-nums text-muted">{bst.clock}</span>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
        <Kpi label="Demand" value={fmtNum(grid.demand)} unit="MW" />
        <Kpi label="Supply" value={fmtNum(grid.supply)} unit="MW" />
        <Kpi label="Deficit" value={fmtNum(grid.deficit)} unit="MW" tone={grid.deficit > 0 ? "danger" : "ok"} />
        <Kpi label="Load shedding" value={fmtNum(grid.shedding)} unit="MW" tone={grid.shedding > 0 ? "danger" : "ok"} />
        <Kpi label="Frequency" value={grid.frequency.toFixed(2)} unit="Hz" />
        <Kpi label="Risk" value={grid.risk} tone={riskTone(grid.risk)} hint={grid.status} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Demand vs supply · next 24 h</CardTitle>
              <CardDesc>XGBoost national load shape anchored on PGCB peaks.</CardDesc>
            </div>
            <DataClassBadge value="MODEL_FORECAST" />
          </CardHeader>
          <DemandChart data={hourly} />
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Generation mix</CardTitle>
              <CardDesc>Current MW by fuel, including HVDC import.</CardDesc>
            </div>
          </CardHeader>
          <MixBars rows={mixRows} />
        </Card>
      </div>

      <Card>
        <p className="text-sm leading-relaxed text-muted">{grid.remarks}</p>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Solar AI</CardTitle>
              <CardDesc>Best 24 h energy: {solar.bestZone}</CardDesc>
            </div>
            <DataClassBadge value="LIVE" />
          </CardHeader>
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Best zone" value={solar.bestZone} />
            <Kpi label="MWh / 1 MW · 24 h" value={solar.bestEnergy.toFixed(2)} />
            <Kpi label="Radiation" value={fmtNum(solar.opportunity.radiation, 0)} unit="W/m²" />
            <Kpi label="Gen / 1 MW" value={solar.opportunity.gen.toFixed(3)} />
          </div>
          <Link to="/solar" className="mt-4 inline-block text-sm text-accent hover:underline">
            Open solar desk
          </Link>
        </Card>
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Wind AI</CardTitle>
              <CardDesc>Best modelled CF: {fmtPct(wind.bestCf)}</CardDesc>
            </div>
            <DataClassBadge value="LIVE" />
          </CardHeader>
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Best zone" value={wind.bestZone} />
            <Kpi label="MWh / 1 MW · 24 h" value={wind.bestEnergy.toFixed(2)} />
            <Kpi label="100 m speed" value={wind.opportunity.speed.toFixed(1)} unit="km/h" />
            <Kpi label="Opportunity zone" value={wind.opportunity.zone} />
          </div>
          <Link to="/wind" className="mt-4 inline-block text-sm text-accent hover:underline">
            Open wind desk
          </Link>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>LoadShield</CardTitle>
            <CardDesc>
              Initial deficit {fmtMw(grid.deficit)} · ranked support {fmtMw(Math.min(shield.total, grid.deficit || shield.total))}
            </CardDesc>
          </div>
          <Badge tone={remaining > 10 ? "danger" : "ok"}>
            {remaining > 10 ? "Deficit remains" : "Covered in model"}
          </Badge>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="pb-2 pr-3 font-medium">Rank</th>
                <th className="pb-2 pr-3 font-medium">Zone</th>
                <th className="pb-2 pr-3 font-medium">Resource</th>
                <th className="pb-2 font-medium">Support</th>
              </tr>
            </thead>
            <tbody>
              {shield.rows.slice(0, 8).map((row) => (
                <tr key={`${row.zone}-${row.resource}`} className="border-b border-border/60">
                  <td className="py-2 pr-3 font-mono tabular-nums text-muted">{row.rank}</td>
                  <td className="py-2 pr-3">{row.zone}</td>
                  <td className="py-2 pr-3">{row.resource}</td>
                  <td className="py-2 font-mono tabular-nums">{fmtMw(row.supportMw, 1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/loadshield" className="mt-4 inline-block text-sm text-accent hover:underline">
          Full dispatch list
        </Link>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Nine-zone renewable score</CardTitle>
            <CardDesc>Combined solar + wind MWh per installed megawatt over 24 hours.</CardDesc>
          </div>
          <Link to="/zones" className="text-sm text-accent hover:underline">
            Zone atlas
          </Link>
        </CardHeader>
        <div className="grid gap-2 sm:grid-cols-3">
          {ZONES.map((z) => (
            <div key={z.name} className="rounded-md bg-elevated px-3 py-3">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium">
                  <span className="mr-2 font-mono text-xs text-muted">{z.rank}</span>
                  {z.name}
                </p>
                <p className="font-mono text-sm tabular-nums text-accent">{z.score.toFixed(1)}</p>
              </div>
              <p className="mt-1 text-xs text-muted">
                Solar {z.solarMwh.toFixed(2)} · Wind {z.windMwh.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
