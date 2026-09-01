import { cn } from "@/lib/utils";

export function Kpi({
  label,
  value,
  unit,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  unit?: string;
  hint?: string;
  tone?: "default" | "danger" | "ok" | "warn";
}) {
  return (
    <div className="rounded-lg bg-elevated p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-subtle">{label}</p>
      <p
        className={cn(
          "mt-2 font-mono text-2xl font-medium tabular-nums leading-none",
          tone === "danger" && "text-danger",
          tone === "ok" && "text-ok",
          tone === "warn" && "text-warn",
        )}
      >
        {value}
        {unit ? <span className="ml-1 text-xs font-normal text-muted">{unit}</span> : null}
      </p>
      {hint ? <p className="mt-2 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
