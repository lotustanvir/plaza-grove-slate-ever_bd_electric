import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { i as CardTitle, n as CardDesc, r as CardHeader, t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum } from "./format-BJ0h-eCC.mjs";
import { a as BIOMASS_NATIONAL, i as BIOMASS_DIVISIONS } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/biomass-Brl5vWJL.js
var import_jsx_runtime = require_jsx_runtime();
function BiomassPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Calculated potential",
				title: "Biomass",
				description: "No utility-scale biomass plant is grid-connected in Bangladesh. These figures are calculated from FAOSTAT crop data, DLS livestock census and BBS residue surveys — feedstock, not live MW.",
				badge: "CALCULATED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Dispatchable",
						value: fmtNum(BIOMASS_NATIONAL.dispatchMw, 0),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Average potential",
						value: fmtNum(BIOMASS_NATIONAL.avgMw, 0),
						unit: "MW"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Electricity",
						value: fmtNum(Math.round(BIOMASS_NATIONAL.mwhYear / 1e3)),
						unit: "GWh / yr"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Crop residue",
						value: fmtNum(Math.round(BIOMASS_NATIONAL.crop / 1e6), 1),
						unit: "Mt / yr"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Division potential" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDesc, { children: "Comilla zone shares Chattogram division feedstock statistics." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-xs uppercase tracking-wider text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "Division"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "Zone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "Crop t/yr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "Manure t/yr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 pr-3 font-medium",
								children: "MWh / yr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 font-medium",
								children: "Dispatch MW"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: BIOMASS_DIVISIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: d.division
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: d.zone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 font-mono tabular-nums",
								children: fmtNum(d.crop)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 font-mono tabular-nums",
								children: fmtNum(d.manure)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 font-mono tabular-nums",
								children: fmtNum(d.mwhYear)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 font-mono tabular-nums",
								children: d.dispatchMw.toFixed(1)
							})
						]
					}, d.division)) })]
				})
			})] })
		]
	});
}
//#endregion
export { BiomassPage as component };
