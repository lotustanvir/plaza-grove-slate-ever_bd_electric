import type { ReactNode } from "react";
import { DataClassBadge } from "@/components/data-class";
import type { DataClass } from "@/lib/types";

export function PageHeader({
  kicker,
  title,
  description,
  badge,
  extra,
}: {
  kicker?: string;
  title: string;
  description?: string;
  badge?: DataClass;
  extra?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl space-y-2">
        {kicker ? (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{kicker}</p>
        ) : null}
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
        {description ? <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {badge ? <DataClassBadge value={badge} /> : null}
        {extra}
      </div>
    </header>
  );
}
