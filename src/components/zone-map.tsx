import { ZONES } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ZoneName } from "@/lib/types";

const LON_MIN = 88.0;
const LON_MAX = 92.7;
const LAT_MIN = 20.7;
const LAT_MAX = 26.7;

function project(lat: number, lon: number) {
  const x = 6 + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 72;
  const y = 8 + (1 - (lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * 108;
  return { x, y };
}

export function ZoneMap({
  active,
  onSelect,
}: {
  active?: ZoneName;
  onSelect?: (name: ZoneName) => void;
}) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-elevated">
      <svg viewBox="0 0 100 125" className="h-full w-full" role="img" aria-label="Bangladesh zone plot">
        <rect width="100" height="125" fill="transparent" />
        {[0, 25, 50, 75, 100].map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={125} stroke="currentColor" className="text-border" strokeWidth="0.3" />
        ))}
        {[0, 25, 50, 75, 100, 125].map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={100} y2={y} stroke="currentColor" className="text-border" strokeWidth="0.3" />
        ))}
        {ZONES.map((z) => {
          const { x, y } = project(z.lat, z.lon);
          const selected = active === z.name;
          return (
            <g
              key={z.name}
              transform={`translate(${x} ${y})`}
              className="cursor-pointer"
              onClick={() => onSelect?.(z.name)}
            >
              <circle
                r={selected ? 3.4 : 2.4}
                fill={selected ? "var(--color-accent)" : "var(--color-foreground)"}
                opacity={selected ? 1 : 0.7}
              />
              <text
                x={4.2}
                y={1.4}
                fontSize="3.4"
                fill="var(--color-muted)"
                className={cn(selected && "fill-accent")}
              >
                {z.rank} {z.name}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wider text-subtle">
        Lat/lon plot · 9 PGCB zones
      </p>
    </div>
  );
}
