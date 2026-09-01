import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GRID_HISTORY, MODELS, PREDICTIONS } from "@/lib/data";
import { fmtNum, fmtPct } from "@/lib/format";

export const Route = createFileRoute("/history")({ component: HistoryPage });

function HistoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Archive"
        title="Historical data"
        description="PGCB snapshots used to train and back-test the demand model, plus solar/wind predictions and the active model registry."
        badge="OFFICIAL_PGCB"
      />

      <Tabs defaultValue="grid">
        <TabsList className="mb-4 flex h-auto w-full flex-wrap justify-start">
          <TabsTrigger value="grid">Grid</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                    <th className="pb-2 pr-3 font-medium">Time</th>
                    <th className="pb-2 pr-3 font-medium">Demand</th>
                    <th className="pb-2 pr-3 font-medium">Supply</th>
                    <th className="pb-2 pr-3 font-medium">Shedding</th>
                    <th className="pb-2 pr-3 font-medium">Gas</th>
                    <th className="pb-2 pr-3 font-medium">Coal</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {GRID_HISTORY.map((r) => (
                    <tr key={r.id} className="border-b border-border/60">
                      <td className="py-2 pr-3 whitespace-nowrap">{r.time}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(r.demand)}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(r.supply)}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums text-danger">{fmtNum(r.shedding)}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(r.gas)}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums">{fmtNum(r.coal)}</td>
                      <td className="py-2">
                        <Badge tone={r.shedding > 2500 ? "danger" : "warn"}>{r.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="predictions">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                    <th className="pb-2 pr-3 font-medium">Time</th>
                    <th className="pb-2 pr-3 font-medium">Model</th>
                    <th className="pb-2 pr-3 font-medium">Zone</th>
                    <th className="pb-2 pr-3 font-medium">Predicted</th>
                    <th className="pb-2 font-medium">Actual</th>
                  </tr>
                </thead>
                <tbody>
                  {PREDICTIONS.map((p) => (
                    <tr key={p.id} className="border-b border-border/60">
                      <td className="py-2 pr-3 whitespace-nowrap">{p.time}</td>
                      <td className="py-2 pr-3">{p.model}</td>
                      <td className="py-2 pr-3">{p.zone}</td>
                      <td className="py-2 pr-3 font-mono tabular-nums">{p.predicted}</td>
                      <td className="py-2 font-mono tabular-nums">{p.actual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="models">
          <div className="grid gap-4 lg:grid-cols-3">
            {MODELS.map((m) => (
              <Card key={m.type} className="p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-base font-medium">{m.type}</h2>
                  <Badge tone={m.active ? "ok" : "default"}>{m.active ? "Active" : "Idle"}</Badge>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{m.version}</p>
                <dl className="mt-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Samples</dt>
                    <dd className="font-mono tabular-nums">{fmtNum(m.samples)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">MAE</dt>
                    <dd className="font-mono tabular-nums">{m.mae}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">RMSE</dt>
                    <dd className="font-mono tabular-nums">{m.rmse}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">R²</dt>
                    <dd className="font-mono tabular-nums">{m.r2}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">MAPE</dt>
                    <dd className="font-mono tabular-nums">{fmtPct(m.mape)}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-subtle">{m.features.join(" · ")}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
