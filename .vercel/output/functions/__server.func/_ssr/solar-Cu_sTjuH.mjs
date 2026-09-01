import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum } from "./format-BJ0h-eCC.mjs";
import { i as ZoneScoreChart, r as SolarDayChart } from "./charts-CGEYun7-.mjs";
import { i as solarNow } from "./live-C5Gy9dQo.mjs";
import { t as useLiveGrid } from "./use-live-DrXSsK05.mjs";
import { h as ZONES } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solar-Cu_sTjuH.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		title: "Weather ingest",
		body: "Open-Meteo GHI, DNI, DHI, cloud fraction, aerosol and humidity for every hour on a seven-day horizon."
	},
	{
		title: "Zone mapping",
		body: "Nine PGCB zones keep separate weights. Irradiance is interpolated to zone centroids before scoring."
	},
	{
		title: "Gradient-boosted forecast",
		body: "Features include solar zenith, cloud, AOD and humidity. Output is MW per 1 MW installed plus a 24 h energy total."
	},
	{
		title: "Ranking",
		body: "Zones ordered by expected MWh per installed megawatt so siting and LoadShield share the same score."
	}
];
function SolarPage() {
	const { hourly, bst } = useLiveGrid();
	const solar = solarNow(bst.hourFrac);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Renewable intelligence",
				title: "Solar AI",
				description: "Weather-aware generation forecasts for Bangladesh. Night output is zero; the ranking still uses the next 24-hour energy envelope.",
				badge: "LIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Best zone",
						value: solar.bestZone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Expected energy",
						value: solar.bestEnergy.toFixed(2),
						unit: "MWh / 1 MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Radiation now",
						value: fmtNum(solar.opportunity.radiation, 0),
						unit: "W/m²"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Predicted gen / 1 MW",
						value: solar.opportunity.gen.toFixed(3)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "National solar output · 24 h" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Installed utility solar following the tropical GHI envelope." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolarDayChart, { data: hourly })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Zone ranking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Expected energy MWh per 1 MW installed over 24 hours." })] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneScoreChart, { rows: ZONES.map((z) => ({
					name: z.name,
					solar: z.solarMwh,
					wind: 0
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
									children: "MW per 1 MW (peak hour)"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: solar.ranking.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
									children: row.gen.toFixed(3)
								})
							]
						}, row.zone)) })]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-subtle",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-base font-medium",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: s.body
					})
				] }, s.title))
			})
		]
	});
}
//#endregion
export { SolarPage as component };
