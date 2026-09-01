import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { t as Card } from "./card-H66vOaCe.mjs";
import { o as DATA_SOURCES } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-HC7BNwxR.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Independent",
				title: "About PowerFlex BD",
				description: "An independent energy intelligence platform for Bangladesh. Transparent grid numbers, renewable potential and a deficit optimizer — not a utility, not a ministry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-medium",
						children: "Mission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "PowerFlex BD exists to make Bangladesh power-sector data accessible, interpretable and actionable. We combine public PGCB snapshots with weather-aware solar and wind models so researchers, planners and the public can see the same evening-peak deficit the dispatch desk already manages."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "The product is a virtual power plant layer: forecast demand, rank renewable zones, then recommend how available resources could be coordinated to reduce load-shedding pressure."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: "Data sources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted",
					children: DATA_SOURCES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: d.key
						}),
						" — ",
						d.use
					] }, d.key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: "Disclaimer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "PowerFlex BD is not affiliated with, endorsed by, or connected to the Power Grid Company of Bangladesh (PGCB), the Bangladesh Energy Regulatory Commission (BERC), BPDB, SREDA, or any government body. All figures are processed independently from public feeds and published research. Live MW on this preview follow the last official PGCB shape and a diurnal model — they are not a substitute for NLDC instructions."
				})]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
