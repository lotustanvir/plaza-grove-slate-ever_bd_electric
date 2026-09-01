import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader, t as Badge } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum } from "./format-BJ0h-eCC.mjs";
import { h as ZONES, m as WTE_PROJECTS, p as WASTE_NATIONAL } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/waste-to-energy-B4lZAUat.js
var import_jsx_runtime = require_jsx_runtime();
function WastePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Project intelligence",
				title: "Waste-to-energy",
				description: "Bangladesh has zero operational WtE plants as of 2026. Aminbazar (42.5 MW) is under construction; Matuail is announced. City waste is converted to a calculated MW potential for LoadShield only.",
				badge: "PROJECT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Operational",
						value: "0",
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Planned",
						value: WASTE_NATIONAL.plannedMw.toFixed(1),
						unit: "MW",
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Calculated potential",
						value: WASTE_NATIONAL.potentialMw.toFixed(1),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Daily waste",
						value: fmtNum(WASTE_NATIONAL.dailyTonnes),
						unit: "t"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: WTE_PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-medium",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: p.status === "Under construction" ? "warn" : "default",
								children: p.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								p.site,
								" · ",
								p.zone
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Gross",
									value: p.mw.toFixed(1),
									unit: "MW"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Net",
									value: p.netMw.toFixed(1),
									unit: "MW"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Waste",
									value: fmtNum(p.tonnesDay),
									unit: "t/d"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "COD",
									value: p.cod
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: p.tech
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-subtle",
							children: [p.source, p.costUsd ? ` · US$${fmtNum(p.costUsd)}` : ""]
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Zone allocation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Calculated from city corporation waste generation, not plant output." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-3",
				children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-elevated px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: z.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-sm tabular-nums",
						children: [
							z.wasteMw.toFixed(2),
							" MW · ",
							fmtNum(z.wasteMwhYear),
							" MWh/yr"
						]
					})]
				}, z.name))
			})] })
		]
	});
}
//#endregion
export { WastePage as component };
