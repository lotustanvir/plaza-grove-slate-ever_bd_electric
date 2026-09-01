import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum, r as fmtMw } from "./format-BJ0h-eCC.mjs";
import { t as useLiveGrid } from "./use-live-DrXSsK05.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sun, c as Gauge, d as Activity, l as Cpu, r as Wind, s as Layers, t as Zap, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as ZONES, n as Button } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bq6ps6ym.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Gauge,
		title: "Grid monitoring",
		body: "Live demand, supply, frequency and load-shedding across the national dispatch picture — sourced from PGCB ERP snapshots."
	},
	{
		icon: Sun,
		title: "Solar AI",
		body: "Weather-aware irradiance forecasts for nine zones, ranked by expected MWh per installed megawatt over the next 24 hours."
	},
	{
		icon: Wind,
		title: "Wind AI",
		body: "100-metre hub-height modelling with coastal turbine power curves. Capacity factor and hourly opportunity per zone."
	},
	{
		icon: Zap,
		title: "LoadShield",
		body: "When the evening peak opens a deficit, LoadShield ranks solar, wind, biomass and waste support so operators know where to look first."
	}
];
function Home() {
	const { grid, bst } = useLiveGrid();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.2em] text-accent",
						children: "Bangladesh power intelligence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl",
						children: "See the deficit before the lights flicker."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
						children: "PowerFlex BD forecasts demand and renewable generation, then recommends how solar, wind, biomass and waste can be coordinated to cut peak-load stress on the national grid."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								children: ["Open dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/loadshield",
								children: "Inspect LoadShield"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-subtle",
						children: [
							bst.date,
							" · ",
							bst.clock
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
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
							label: "Frequency",
							value: grid.frequency.toFixed(2),
							unit: "Hz"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-6 text-xl font-medium",
				children: "What the platform does"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "mb-4 size-5 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: f.body
						})
					]
				}, f.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Zones modelled"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-4xl font-medium tabular-nums",
								children: ZONES.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "PGCB operational zones from Rangpur to Chittagong."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Resources tracked"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-4xl font-medium tabular-nums",
								children: "9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Solar, wind, hydro, biomass, waste, gas, liquid, coal, nuclear."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Peak case"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-4xl font-medium tabular-nums",
								children: "17.6k"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "XGBoost evening peak, MW. MAPE held under 4% on trailing PGCB days."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-xl bg-surface p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-medium",
							children: "Built as a virtual power plant layer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Not a utility. An independent intelligence layer on public PGCB, weather and statistical feeds — so researchers, planners and operators can see the same deficit the dispatch desk already feels."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/technology",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4" }), " Technology"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/zones",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), " Zone ranking"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex items-start gap-3 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Live figures on this preview follow the PGCB evening-peak shape published in PowerFlex-BD (demand ",
					fmtMw(grid.demand),
					", supply ",
					fmtMw(grid.supply),
					"). They tick with Bangladesh Standard Time so the dashboard stays honest after sunset."
				] })]
			})
		]
	});
}
//#endregion
export { Home as component };
