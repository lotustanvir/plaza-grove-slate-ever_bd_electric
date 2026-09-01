import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Kpi } from "@/components/kpi";
import { WASTE_NATIONAL, WTE_PROJECTS, ZONES } from "@/lib/data";
import { fmtNum } from "@/lib/format";

export const Route = createFileRoute("/waste-to-energy")({ component: WastePage });

function WastePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Project intelligence"
        title="Waste-to-energy"
        description="Bangladesh has zero operational WtE plants as of 2026. Aminbazar (42.5 MW) is under construction; Matuail is announced. City waste is converted to a calculated MW potential for LoadShield only."
        badge="PROJECT"
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Operational" value="0" unit="MW" />
        <Kpi label="Planned" value={WASTE_NATIONAL.plannedMw.toFixed(1)} unit="MW" tone="warn" />
        <Kpi label="Calculated potential" value={WASTE_NATIONAL.potentialMw.toFixed(1)} unit="MW" />
        <Kpi label="Daily waste" value={fmtNum(WASTE_NATIONAL.dailyTonnes)} unit="t" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {WTE_PROJECTS.map((p) => (
          <Card key={p.id} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-medium">{p.name}</h2>
              <Badge tone={p.status === "Under construction" ? "warn" : "default"}>{p.status}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted">
              {p.site} · {p.zone}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Kpi label="Gross" value={p.mw.toFixed(1)} unit="MW" />
              <Kpi label="Net" value={p.netMw.toFixed(1)} unit="MW" />
              <Kpi label="Waste" value={fmtNum(p.tonnesDay)} unit="t/d" />
              <Kpi label="COD" value={p.cod} />
            </div>
            <p className="mt-4 text-sm text-muted">{p.tech}</p>
            <p className="mt-2 text-xs text-subtle">
              {p.source}
              {p.costUsd ? ` · US$${fmtNum(p.costUsd)}` : ""}
            </p>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Zone allocation</CardTitle>
            <CardDesc>Calculated from city corporation waste generation, not plant output.</CardDesc>
          </div>
        </CardHeader>
        <div className="grid gap-2 sm:grid-cols-3">
          {ZONES.map((z) => (
            <div key={z.name} className="rounded-md bg-elevated px-3 py-3">
              <p className="text-sm">{z.name}</p>
              <p className="mt-1 font-mono text-sm tabular-nums">
                {z.wasteMw.toFixed(2)} MW · {fmtNum(z.wasteMwhYear)} MWh/yr
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
