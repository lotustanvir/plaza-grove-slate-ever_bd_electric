import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { a as fmtPct } from "./format-BJ0h-eCC.mjs";
import { i as ZoneScoreChart } from "./charts-CGEYun7-.mjs";
import { a as windNow } from "./live-C5Gy9dQo.mjs";
import { f as TURBINE, h as ZONES } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wind-Bz8eiIZe.js
var import_jsx_runtime = require_jsx_runtime();
function WindPage() {
	const wind = windNow();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Renewable intelligence",
				title: "Wind AI",
				description: "100-metre hub-height resource with manufacturer power curves corrected for tropical air density. Snapshot ranks Rangpur, Sylhet and Khulna first.",
				badge: "LIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Best zone",
						value: wind.bestZone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Expected energy",
						value: wind.bestEnergy.toFixed(2),
						unit: "MWh / 1 MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Capacity factor",
						value: fmtPct(wind.bestCf)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Best hourly slot",
						value: wind.opportunity.zone,
						hint: `${wind.opportunity.speed} km/h @ 100 m`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Zone ranking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Modelled energy and capacity factor at 100 m hub height." })] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneScoreChart, { rows: ZONES.map((z) => ({
					name: z.name,
					solar: 0,
					wind: z.windMwh
				})) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[28rem] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-xs uppercase tracking-wider text-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 pr-3 font-medium",
									children: "Rank"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 pr-3 font-medium",
									children: "Zone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 pr-3 font-medium",
									children: "MWh / 1 MW · 24 h"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: "Capacity factor"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: wind.ranking.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 font-mono tabular-nums text-muted",
									children: row.rank
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: row.zone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 font-mono tabular-nums",
									children: row.expected.toFixed(2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 font-mono tabular-nums",
									children: fmtPct(row.cf)
								})
							]
						}, row.zone)) })]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Turbine assumption" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Coastal South-Asia library interpolated to hub height." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-3 sm:grid-cols-2",
				children: Object.entries(TURBINE).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-elevated px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-wider text-subtle",
						children: k.replace(/_/g, " ")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm",
						children: String(v)
					})]
				}, k))
			})] })
		]
	});
}
//#endregion
export { WindPage as component };
