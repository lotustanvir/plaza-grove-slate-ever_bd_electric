import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as DataClassBadge, r as PageHeader, t as Badge } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { a as fmtPct, i as fmtNum, r as fmtMw } from "./format-BJ0h-eCC.mjs";
import { n as MixBars, t as DemandChart } from "./charts-CGEYun7-.mjs";
import { a as windNow, i as solarNow, n as loadShieldSupport } from "./live-C5Gy9dQo.mjs";
import { t as useLiveGrid } from "./use-live-DrXSsK05.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ZONES } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-yxTwq7Vl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function riskTone(risk) {
	if (risk === "HIGH" || risk === "CRITICAL") return "danger";
	if (risk === "MODERATE") return "warn";
	return "ok";
}
function Dashboard() {
	const { grid, hourly, bst } = useLiveGrid();
	const solar = solarNow(bst.hourFrac);
	const wind = windNow();
	const shield = loadShieldSupport();
	const remaining = Math.max(0, grid.deficit - Math.min(grid.deficit, 1916));
	const mixRows = (0, import_react.useMemo)(() => [
		{
			name: "Gas",
			value: grid.mix.gas,
			fill: "var(--color-muted)"
		},
		{
			name: "Coal",
			value: grid.mix.coal,
			fill: "var(--color-foreground)"
		},
		{
			name: "Liquid",
			value: grid.mix.liquid,
			fill: "var(--color-warn)"
		},
		{
			name: "HVDC",
			value: grid.mix.hvdc,
			fill: "var(--color-accent)"
		},
		{
			name: "Hydro",
			value: grid.mix.hydro,
			fill: "var(--color-ok)"
		},
		{
			name: "Solar",
			value: grid.mix.solar,
			fill: "var(--color-accent)"
		},
		{
			name: "Wind",
			value: grid.mix.wind,
			fill: "var(--color-ok)"
		},
		{
			name: "Import",
			value: grid.mix.otherImport,
			fill: "var(--color-subtle)"
		}
	], [grid.mix]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "National dispatch",
				title: "Power intelligence dashboard",
				description: "Live Bangladesh grid snapshot with AI solar, wind and LoadShield overlays. Figures follow Asia/Dhaka.",
				badge: "OFFICIAL_PGCB",
				extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tabular-nums text-muted",
					children: bst.clock
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Demand",
						value: fmtNum(grid.demand),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Supply",
						value: fmtNum(grid.supply),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Deficit",
						value: fmtNum(grid.deficit),
						unit: "MW",
						tone: grid.deficit > 0 ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Load shedding",
						value: fmtNum(grid.shedding),
						unit: "MW",
						tone: grid.shedding > 0 ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Frequency",
						value: grid.frequency.toFixed(2),
						unit: "Hz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Risk",
						value: grid.risk,
						tone: riskTone(grid.risk),
						hint: grid.status
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Demand vs supply · next 24 h" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "XGBoost national load shape anchored on PGCB peaks." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: "MODEL_FORECAST" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemandChart, { data: hourly })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Generation mix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Current MW by fuel, including HVDC import." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MixBars, { rows: mixRows })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: grid.remarks
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Solar AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDesc, { children: ["Best 24 h energy: ", solar.bestZone] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: "LIVE" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Best zone",
								value: solar.bestZone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "MWh / 1 MW · 24 h",
								value: solar.bestEnergy.toFixed(2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Radiation",
								value: fmtNum(solar.opportunity.radiation, 0),
								unit: "W/m²"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Gen / 1 MW",
								value: solar.opportunity.gen.toFixed(3)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/solar",
						className: "mt-4 inline-block text-sm text-accent hover:underline",
						children: "Open solar desk"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Wind AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDesc, { children: ["Best modelled CF: ", fmtPct(wind.bestCf)] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: "LIVE" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Best zone",
								value: wind.bestZone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "MWh / 1 MW · 24 h",
								value: wind.bestEnergy.toFixed(2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "100 m speed",
								value: wind.opportunity.speed.toFixed(1),
								unit: "km/h"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Opportunity zone",
								value: wind.opportunity.zone
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/wind",
						className: "mt-4 inline-block text-sm text-accent hover:underline",
						children: "Open wind desk"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "LoadShield" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDesc, { children: [
					"Initial deficit ",
					fmtMw(grid.deficit),
					" · ranked support ",
					fmtMw(Math.min(shield.total, grid.deficit || shield.total))
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: remaining > 10 ? "danger" : "ok",
					children: remaining > 10 ? "Deficit remains" : "Covered in model"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[32rem] text-left text-sm",
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
									children: "Resource"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 font-medium",
									children: "Support"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: shield.rows.slice(0, 8).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
									className: "py-2 pr-3",
									children: row.resource
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 font-mono tabular-nums",
									children: fmtMw(row.supportMw, 1)
								})
							]
						}, `${row.zone}-${row.resource}`)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/loadshield",
					className: "mt-4 inline-block text-sm text-accent hover:underline",
					children: "Full dispatch list"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Nine-zone renewable score" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Combined solar + wind MWh per installed megawatt over 24 hours." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/zones",
				className: "text-sm text-accent hover:underline",
				children: "Zone atlas"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-3",
				children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-elevated px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 font-mono text-xs text-muted",
								children: z.rank
							}), z.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm tabular-nums text-accent",
							children: z.score.toFixed(1)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted",
						children: [
							"Solar ",
							z.solarMwh.toFixed(2),
							" · Wind ",
							z.windMwh.toFixed(1)
						]
					})]
				}, z.name))
			})] })
		]
	});
}
//#endregion
export { Dashboard as component };
