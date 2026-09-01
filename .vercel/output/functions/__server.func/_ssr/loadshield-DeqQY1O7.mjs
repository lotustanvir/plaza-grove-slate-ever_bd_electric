import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as DataClassBadge, r as PageHeader, t as Badge } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum, r as fmtMw } from "./format-BJ0h-eCC.mjs";
import { n as loadShieldSupport } from "./live-C5Gy9dQo.mjs";
import { t as useLiveGrid } from "./use-live-DrXSsK05.mjs";
import { d as RESOURCE_STATIC } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loadshield-DeqQY1O7.js
var import_jsx_runtime = require_jsx_runtime();
function LoadShieldPage() {
	const { grid, hourly } = useLiveGrid();
	const shield = loadShieldSupport();
	const peak = hourly.reduce((m, h) => h.demand > m.demand ? h : m, hourly[0]);
	const covered = Math.min(shield.total, grid.deficit);
	const remaining = Math.max(0, grid.deficit - covered);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Optimizer",
				title: "LoadShield",
				description: "When projected demand exceeds available generation, LoadShield ranks solar, wind, biomass and waste support by zone so the remaining gap is explicit.",
				badge: "MODEL_FORECAST"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
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
						label: "Initial deficit",
						value: fmtNum(grid.deficit),
						unit: "MW",
						tone: "danger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Load shedding",
						value: fmtNum(grid.shedding),
						unit: "MW",
						tone: "danger"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-subtle",
							children: "Risk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl font-medium",
							children: grid.risk
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: grid.status
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-subtle",
							children: "Ranked support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-2xl tabular-nums",
							children: fmtMw(covered, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "From the zone resource pool"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-subtle",
							children: "Remaining gap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-2xl tabular-nums text-danger",
							children: fmtMw(remaining, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: remaining > 10 ? "danger" : "ok",
							className: "mt-2",
							children: remaining > 10 ? "Deficit remains" : "Model covered"
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Resource analysis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Usable for dispatch only when the row is Bangladesh-current or calculated potential." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: RESOURCE_STATIC.map((r) => {
					const liveMw = r.id === "solar" ? grid.mix.solar : r.id === "wind" ? grid.mix.wind : r.id === "hydro" ? grid.mix.hydro : r.id === "gas" ? grid.mix.gas : r.id === "liquid" ? grid.mix.liquid : r.id === "coal" ? grid.mix.coal : r.generationMw;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-elevated p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: r.classification })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-lg tabular-nums",
								children: liveMw == null ? "Not generating" : fmtMw(liveMw, 0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: r.status
							})
						]
					}, r.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recommended deployment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Ordered by combined renewable score. Biomass and waste are calculated potential, not live MW." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-xs uppercase tracking-wider text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "#"
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
								className: "pb-2 pr-3 font-medium",
								children: "Support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 font-medium",
								children: "Reason"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: shield.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/60 align-top",
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
								className: "py-2 pr-3 font-mono tabular-nums",
								children: fmtMw(row.supportMw, 1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-muted",
								children: row.reason
							})
						]
					}, `${row.zone}-${row.resource}-${row.rank}`)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Forecast preparation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Peak of the next 24 hours versus current demand." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: "MODEL_FORECAST" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Forecast peak",
						value: fmtNum(peak.demand),
						unit: "MW",
						hint: peak.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Current demand",
						value: fmtNum(grid.demand),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Additional requirement",
						value: fmtNum(Math.max(0, peak.demand - grid.demand)),
						unit: "MW",
						tone: "warn"
					})
				]
			})] })
		]
	});
}
//#endregion
export { LoadShieldPage as component };
