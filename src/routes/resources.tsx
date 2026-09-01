import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { DataClassBadge } from "@/components/data-class";
import { RESOURCE_STATIC } from "@/lib/data";
import { useLiveGrid } from "@/hooks/use-live";
import { fmtMw, fmtNum } from "@/lib/format";

export const Route = createFileRoute("/resources")({ component: ResourcesPage });

const LINKS: Record<string, string> = {
  solar: "/solar",
  wind: "/wind",
  biomass: "/biomass",
  waste: "/waste-to-energy",
};

function ResourcesPage() {
  const { grid } = useLiveGrid();
  const liveGen: Record<string, number | null> = {
    solar: grid.mix.solar,
    wind: grid.mix.wind,
    hydro: grid.mix.hydro,
    gas: grid.mix.gas,
    liquid: grid.mix.liquid,
    coal: grid.mix.coal,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Fleet"
        title="Nine resources"
        description="Every Bangladesh electricity source PowerFlex tracks. Live MW come from the PGCB mix; biomass, waste and nuclear are classified separately so nothing is invented."
        badge="OFFICIAL_PGCB"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCE_STATIC.map((r) => {
          const gen = r.id in liveGen ? liveGen[r.id]! : r.generationMw;
          const href = LINKS[r.id];
          const inner = (
            <>
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-medium">{r.name}</h2>
                <DataClassBadge value={r.classification} />
              </div>
              <p className="mt-4 font-mono text-2xl tabular-nums">
                {gen == null ? "—" : fmtNum(gen)}
                <span className="ml-1 text-xs text-muted">MW now</span>
              </p>
              <p className="mt-1 text-xs text-muted">
                Installed {r.installedMw == null ? "—" : fmtMw(r.installedMw, 0)}
                {r.availableMw != null ? ` · available ${fmtMw(r.availableMw, 0)}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.note}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-subtle">{r.status}</p>
            </>
          );
          return href ? (
            <Link key={r.id} to={href} className="block">
              <Card className="h-full transition-colors hover:bg-elevated">{inner}</Card>
            </Link>
          ) : (
            <Card key={r.id}>{inner}</Card>
          );
        })}
      </div>
    </div>
  );
}
