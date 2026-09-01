import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { ZoneMap } from "@/components/zone-map";
import { ZoneScoreChart } from "@/components/charts";
import { Kpi } from "@/components/kpi";
import { ZONES } from "@/lib/data";
import { fmtMw, fmtNum } from "@/lib/format";
import type { ZoneName } from "@/lib/types";

export const Route = createFileRoute("/zones")({ component: ZonesPage });

function ZonesPage() {
  const [active, setActive] = useState<ZoneName>("Rangpur");
  const zone = ZONES.find((z) => z.name === active) ?? ZONES[0]!;

  return (
    <div className="space-y-6">
      <PageHeader
        kicker="Geography"
        title="Nine-zone atlas"
        description="Bangladesh split into nine PGCB operational zones. Each is scored on solar, wind, biomass and waste so LoadShield and siting share one ranking."
        badge="LIVE"
      />

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <ZoneMap active={active} onSelect={setActive} />
        <Card className="p-6">
          <p className="text-xs uppercase tracking-wider text-subtle">Rank {zone.rank}</p>
          <h2 className="mt-1 text-2xl font-medium">{zone.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{zone.blurb}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Kpi label="Solar 24 h" value={zone.solarMwh.toFixed(2)} unit="MWh / 1 MW" />
            <Kpi label="Wind 24 h" value={zone.windMwh.toFixed(2)} unit="MWh / 1 MW" />
            <Kpi label="Biomass" value={fmtNum(zone.biomassMw, 0)} unit="MW" />
            <Kpi label="Waste" value={zone.wasteMw.toFixed(2)} unit="MW" />
          </div>
          <p className="mt-4 text-xs text-subtle">
            {zone.lat.toFixed(2)}° N · {zone.lon.toFixed(2)}° E · combined score {zone.score.toFixed(2)}
          </p>
        </Card>
      </div>

      <Card>
        <ZoneScoreChart rows={ZONES.map((z) => ({ name: z.name, solar: z.solarMwh, wind: z.windMwh }))} />
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ZONES.map((z) => (
          <button
            key={z.name}
            type="button"
            onClick={() => setActive(z.name)}
            className={`rounded-xl bg-surface p-5 text-left shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_10%,transparent)] transition-colors ${
              active === z.name ? "bg-elevated" : ""
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-medium">{z.name}</h3>
              <span className="font-mono text-xs text-muted">{z.rank}</span>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{z.blurb}</p>
            <p className="mt-3 font-mono text-xs tabular-nums text-accent">
              Score {z.score.toFixed(1)} · Biomass {fmtMw(z.biomassMw, 0)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
