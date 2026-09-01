import { Badge } from "@/components/ui/badge";
import type { DataClass } from "@/lib/types";

const MAP: Record<DataClass, { label: string; tone: "accent" | "ok" | "warn" | "danger" | "default" }> = {
  OFFICIAL_PGCB: { label: "Official PGCB", tone: "ok" },
  LIVE: { label: "Live", tone: "accent" },
  MODEL_FORECAST: { label: "Model forecast", tone: "accent" },
  CALCULATED: { label: "Calculated", tone: "default" },
  PROJECT: { label: "Project data", tone: "warn" },
  PROTOTYPE: { label: "Prototype", tone: "warn" },
};

export function DataClassBadge({ value }: { value: DataClass }) {
  const item = MAP[value];
  return <Badge tone={item.tone}>{item.label}</Badge>;
}
