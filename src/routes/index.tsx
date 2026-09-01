import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Cpu,
  Gauge,
  Layers,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Kpi } from "@/components/kpi";
import { useLiveGrid } from "@/hooks/use-live";
import { fmtMw, fmtNum } from "@/lib/format";
import { ZONES } from "@/lib/data";

export const Route = createFileRoute("/")({ component: Home });

const FEATURES = [
  {
    icon: Gauge,
    title: "Grid monitoring",
    body: "Live demand, supply, frequency and load-shedding across the national dispatch picture — sourced from PGCB ERP snapshots.",
  },
  {
    icon: Sun,
    title: "Solar AI",
    body: "Weather-aware irradiance forecasts for nine zones, ranked by expected MWh per installed megawatt over the next 24 hours.",
  },
  {
    icon: Wind,
    title: "Wind AI",
    body: "100-metre hub-height modelling with coastal turbine power curves. Capacity factor and hourly opportunity per zone.",
  },
  {
    icon: Zap,
    title: "LoadShield",
    body: "When the evening peak opens a deficit, LoadShield ranks solar, wind, biomass and waste support so operators know where to look first.",
  },
];

function Home() {
  const { grid, bst } = useLiveGrid();

  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Bangladesh power intelligence</p>
          <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
            See the deficit before the lights flicker.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            PowerFlex BD forecasts demand and renewable generation, then recommends how solar, wind, biomass and waste
            can be coordinated to cut peak-load stress on the national grid.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/dashboard">
                Open dashboard <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/loadshield">Inspect LoadShield</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-subtle">{bst.date} · {bst.clock}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Kpi label="Demand" value={fmtNum(grid.demand)} unit="MW" />
          <Kpi label="Supply" value={fmtNum(grid.supply)} unit="MW" />
          <Kpi
            label="Deficit"
            value={fmtNum(grid.deficit)}
            unit="MW"
            tone={grid.deficit > 0 ? "danger" : "ok"}
          />
          <Kpi label="Frequency" value={grid.frequency.toFixed(2)} unit="Hz" />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-medium">What the platform does</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <Card key={f.title} className="p-6">
              <f.icon className="mb-4 size-5 text-accent" />
              <h3 className="text-base font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card className="p-6">
          <p className="text-xs uppercase tracking-wider text-subtle">Zones modelled</p>
          <p className="mt-3 font-mono text-4xl font-medium tabular-nums">{ZONES.length}</p>
          <p className="mt-2 text-sm text-muted">PGCB operational zones from Rangpur to Chittagong.</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs uppercase tracking-wider text-subtle">Resources tracked</p>
          <p className="mt-3 font-mono text-4xl font-medium tabular-nums">9</p>
          <p className="mt-2 text-sm text-muted">Solar, wind, hydro, biomass, waste, gas, liquid, coal, nuclear.</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs uppercase tracking-wider text-subtle">Peak case</p>
          <p className="mt-3 font-mono text-4xl font-medium tabular-nums">17.6k</p>
          <p className="mt-2 text-sm text-muted">XGBoost evening peak, MW. MAPE held under 4% on trailing PGCB days.</p>
        </Card>
      </section>

      <section className="rounded-xl bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-xl font-medium">Built as a virtual power plant layer</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Not a utility. An independent intelligence layer on public PGCB, weather and statistical feeds — so
              researchers, planners and operators can see the same deficit the dispatch desk already feels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link to="/technology">
                <Cpu className="size-4" /> Technology
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/zones">
                <Layers className="size-4" /> Zone ranking
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="flex items-start gap-3 text-sm text-muted">
        <Activity className="mt-0.5 size-4 shrink-0 text-accent" />
        <p>
          Live figures on this preview follow the PGCB evening-peak shape published in PowerFlex-BD (demand {fmtMw(grid.demand)},
          supply {fmtMw(grid.supply)}). They tick with Bangladesh Standard Time so the dashboard stays honest after sunset.
        </p>
      </section>
    </div>
  );
}
