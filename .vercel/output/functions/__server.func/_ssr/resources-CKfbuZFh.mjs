import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as DataClassBadge, r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { t as Card } from "./card-H66vOaCe.mjs";
import { i as fmtNum, r as fmtMw } from "./format-BJ0h-eCC.mjs";
import { t as useLiveGrid } from "./use-live-DrXSsK05.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as RESOURCE_STATIC } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-CKfbuZFh.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = {
	solar: "/solar",
	wind: "/wind",
	biomass: "/biomass",
	waste: "/waste-to-energy"
};
function ResourcesPage() {
	const { grid } = useLiveGrid();
	const liveGen = {
		solar: grid.mix.solar,
		wind: grid.mix.wind,
		hydro: grid.mix.hydro,
		gas: grid.mix.gas,
		liquid: grid.mix.liquid,
		coal: grid.mix.coal
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Fleet",
			title: "Nine resources",
			description: "Every Bangladesh electricity source PowerFlex tracks. Live MW come from the PGCB mix; biomass, waste and nuclear are classified separately so nothing is invented.",
			badge: "OFFICIAL_PGCB"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: RESOURCE_STATIC.map((r) => {
				const gen = r.id in liveGen ? liveGen[r.id] : r.generationMw;
				const href = LINKS[r.id];
				const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-medium",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: r.classification })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-mono text-2xl tabular-nums",
						children: [gen == null ? "—" : fmtNum(gen), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-xs text-muted",
							children: "MW now"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted",
						children: [
							"Installed ",
							r.installedMw == null ? "—" : fmtMw(r.installedMw, 0),
							r.availableMw != null ? ` · available ${fmtMw(r.availableMw, 0)}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: r.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs uppercase tracking-wider text-subtle",
						children: r.status
					})
				] });
				return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: href,
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "h-full transition-colors hover:bg-elevated",
						children: inner
					})
				}, r.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: inner }, r.id);
			})
		})]
	});
}
//#endregion
export { ResourcesPage as component };
