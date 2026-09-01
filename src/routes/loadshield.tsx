import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Kpi } from "@/components/kpi";
import { Badge } from "@/components/ui/badge";
import { DataClassBadge } from "@/components/data-class";
import { useLiveGrid } from "@/hooks/use-live";
import { loadShieldSupport } from "@/lib/live";
import { RESOURCE_STATIC } from "@/lib/data";
import { fmtMw, fmtNum } from "@/lib/format";

export const Route = createFileRoute("/loadshield")({ component: LoadShieldPage });

function LoadShieldPage() {
  const { grid, hourly } = useLiveGrid();
  const shield = loadShieldSupport();
  const peak = hourly.reduce((m, h) => (h.demand > m.demand ? h : m), hourly[0]!);
  const covered = Math.min(shield.total, grid.deficit);
  const remaining = Math.max(0, grid.deficit - covered);

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Optimizer"
        title="LoadShield"
        description="When projected demand exceeds available generation, LoadShield ranks solar, wind, biomass and waste support by zone so the remaining gap is explicit."
        badge="MODEL_FORECAST"
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Demand" value={fmtNum(grid.demand)} unit="MW" />
        <Kpi label="Supply" value={fmtNum(grid.supply)} unit="MW" />
        <Kpi label="Initial deficit" value={fmtNum(grid.deficit)} unit="MW" tone="danger" />
        <Kpi label="Load shedding" value={fmtNum(grid.shedding)} unit="MW" tone="danger" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wider text-subtle">Risk</p>
          <p className="mt-2 text-2xl font-medium">{grid.risk}</p>
          <p className="mt-1 text-sm text-muted">{grid.status}</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-subtle">Ranked support</p>
          <p className="mt-2 font-mono text-2xl tabular-nums">{fmtMw(covered, 0)}</p>
          <p className="mt-1 text-sm text-muted">From the zone resource pool</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-subtle">Remaining gap</p>
          <p className="mt-2 font-mono text-2xl tabular-nums text-danger">{fmtMw(remaining, 0)}</p>
          <Badge tone={remaining > 10 ? "danger" : "ok"} className="mt-2">
            {remaining > 10 ? "Deficit remains" : "Model covered"}
          </Badge>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Resource analysis</CardTitle>
            <CardDesc>Usable for dispatch only when the row is Bangladesh-current or calculated potential.</CardDesc>
          </div>
        </CardHeader>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_STATIC.map((r) => {
            const liveMw =
              r.id === "solar"
                ? grid.mix.solar
                : r.id === "wind"
                  ? grid.mix.wind
                  : r.id === "hydro"
                    ? grid.mix.hydro
                    : r.id === "gas"
                      ? grid.mix.gas
                      : r.id === "liquid"
                        ? grid.mix.liquid
                        : r.id === "coal"
                          ? grid.mix.coal
                          : r.generationMw;
            return (
            <div key={r.id} className="rounded-lg bg-elevated p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium">{r.name}</p>
                <DataClassBadge value={r.classification} />
              </div>
              <p className="mt-3 font-mono text-lg tabular-nums">
                {liveMw == null ? "Not generating" : fmtMw(liveMw, 0)}
              </p>
              <p className="mt-1 text-xs text-muted">{r.status}</p>
            </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Recommended deployment</CardTitle>
            <CardDesc>Ordered by combined renewable score. Biomass and waste are calculated potential, not live MW.</CardDesc>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="pb-2 pr-3 font-medium">#</th>
                <th className="pb-2 pr-3 font-medium">Zone</th>
                <th className="pb-2 pr-3 font-medium">Resource</th>
                <th className="pb-2 pr-3 font-medium">Support</th>
                <th className="pb-2 font-medium">Reason</th>
              </tr>
            </thead>
            <tbody>
              {shield.rows.map((row) => (
                <tr key={`${row.zone}-${row.resource}-${row.rank}`} className="border-b border-border/60 align-top">
                  <td className="py-2 pr-3 font-mono tabular-nums text-muted">{row.rank}</td>
                  <td className="py-2 pr-3">{row.zone}</td>
                  <td className="py-2 pr-3">{row.resource}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{fmtMw(row.supportMw, 1)}</td>
                  <td className="py-2 text-muted">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Forecast preparation</CardTitle>
            <CardDesc>Peak of the next 24 hours versus current demand.</CardDesc>
          </div>
          <DataClassBadge value="MODEL_FORECAST" />
        </CardHeader>
        <div className="grid gap-3 sm:grid-cols-3">
          <Kpi label="Forecast peak" value={fmtNum(peak.demand)} unit="MW" hint={peak.label} />
          <Kpi label="Current demand" value={fmtNum(grid.demand)} unit="MW" />
          <Kpi
            label="Additional requirement"
            value={fmtNum(Math.max(0, peak.demand - grid.demand))}
            unit="MW"
            tone="warn"
          />
        </div>
      </Card>
    </div>
  );
}
