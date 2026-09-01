import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { HourlyPoint } from "@/lib/types";
import { fmtNum } from "@/lib/format";

const tooltipStyle = {
  background: "#101418",
  border: "1px solid #232a31",
  borderRadius: 8,
  fontSize: 12,
  color: "#e8ecef",
};

export function DemandChart({ data }: { data: HourlyPoint[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="demandFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.28} />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="label" tick={{ fill: "var(--color-muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: "var(--color-muted)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${Math.round(Number(v) / 1000)}k`}
            width={36}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [`${fmtNum(Number(value))} MW`, name === "demand" ? "Demand" : "Supply"]}
          />
          <Area type="monotone" dataKey="supply" stroke="var(--color-muted)" fill="none" strokeWidth={1.5} />
          <Area type="monotone" dataKey="demand" stroke="var(--color-accent)" fill="url(#demandFill)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MixBars({
  rows,
}: {
  rows: { name: string; value: number; fill: string }[];
}) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} layout="vertical" margin={{ top: 0, right: 12, left: 8, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={88}
          />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${fmtNum(Number(v))} MW`, "Generation"]} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={14}>
            {rows.map((r) => (
              <Cell key={r.name} fill={r.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ZoneScoreChart({
  rows,
}: {
  rows: { name: string; solar: number; wind: number }[];
}) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 10 }} interval={0} angle={-28} textAnchor="end" height={48} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "var(--color-muted)", fontSize: 11 }} axisLine={false} tickLine={false} width={32} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="solar" name="Solar MWh / 1 MW" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="wind" name="Wind MWh / 1 MW" fill="var(--color-muted)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SolarDayChart({ data }: { data: HourlyPoint[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="label" tick={{ fill: "var(--color-muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "var(--color-muted)", fontSize: 11 }} axisLine={false} tickLine={false} width={36} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${fmtNum(Number(v))} MW`, "Solar"]} />
          <Area type="monotone" dataKey="solar" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.18} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
