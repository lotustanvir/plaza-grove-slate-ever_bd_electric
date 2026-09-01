import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { DATA_SOURCES } from "@/lib/data";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Independent"
        title="About PowerFlex BD"
        description="An independent energy intelligence platform for Bangladesh. Transparent grid numbers, renewable potential and a deficit optimizer — not a utility, not a ministry."
      />

      <Card className="p-6">
        <h2 className="text-lg font-medium">Mission</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          PowerFlex BD exists to make Bangladesh power-sector data accessible, interpretable and actionable. We combine
          public PGCB snapshots with weather-aware solar and wind models so researchers, planners and the public can
          see the same evening-peak deficit the dispatch desk already manages.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The product is a virtual power plant layer: forecast demand, rank renewable zones, then recommend how
          available resources could be coordinated to reduce load-shedding pressure.
        </p>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-medium">Data sources</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          {DATA_SOURCES.map((d) => (
            <li key={d.key}>
              <span className="font-medium text-foreground">{d.key}</span> — {d.use}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-medium">Disclaimer</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          PowerFlex BD is not affiliated with, endorsed by, or connected to the Power Grid Company of Bangladesh
          (PGCB), the Bangladesh Energy Regulatory Commission (BERC), BPDB, SREDA, or any government body. All
          figures are processed independently from public feeds and published research. Live MW on this preview follow
          the last official PGCB shape and a diurnal model — they are not a substitute for NLDC instructions.
        </p>
      </Card>
    </div>
  );
}
