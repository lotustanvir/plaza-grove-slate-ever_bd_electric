import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardHeader, CardTitle, CardDesc } from "@/components/ui/card";
import { Kpi } from "@/components/kpi";
import { BIOMASS_DIVISIONS, BIOMASS_NATIONAL } from "@/lib/data";
import { fmtNum } from "@/lib/format";

export const Route = createFileRoute("/biomass")({ component: BiomassPage });

function BiomassPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Calculated potential"
        title="Biomass"
        description="No utility-scale biomass plant is grid-connected in Bangladesh. These figures are calculated from FAOSTAT crop data, DLS livestock census and BBS residue surveys — feedstock, not live MW."
        badge="CALCULATED"
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Dispatchable" value={fmtNum(BIOMASS_NATIONAL.dispatchMw, 0)} unit="MW" />
        <Kpi label="Average potential" value={fmtNum(BIOMASS_NATIONAL.avgMw, 0)} unit="MW" />
        <Kpi label="Electricity" value={fmtNum(Math.round(BIOMASS_NATIONAL.mwhYear / 1000))} unit="GWh / yr" />
        <Kpi label="Crop residue" value={fmtNum(Math.round(BIOMASS_NATIONAL.crop / 1_000_000), 1)} unit="Mt / yr" />
      </div>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Division potential</CardTitle>
            <CardDesc>Comilla zone shares Chattogram division feedstock statistics.</CardDesc>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="pb-2 pr-3 font-medium">Division</th>
                <th className="pb-2 pr-3 font-medium">Zone</th>
                <th className="pb-2 pr-3 font-medium">Crop t/yr</th>
                <th className="pb-2 pr-3 font-medium">Manure t/yr</th>
                <th className="pb-2 pr-3 font-medium">MWh / yr</th>
                <th className="pb-2 font-medium">Dispatch MW</th>
              </tr>
            </thead>
            <tbody>
              {BIOMASS_DIVISIONS.map((d) => (
                <tr key={d.division} className="border-b border-border/60">
                  <td className="py-2 pr-3">{d.division}</td>
                  <td className="py-2 pr-3">{d.zone}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(d.crop)}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(d.manure)}</td>
                  <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(d.mwhYear)}</td>
                  <td className="py-2 font-mono tabular-nums">{d.dispatchMw.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
