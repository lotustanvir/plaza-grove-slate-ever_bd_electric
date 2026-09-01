import { i as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as PageHeader } from "./page-header-D7Elm-Uu.mjs";
import { t as Card } from "./card-H66vOaCe.mjs";
import { t as Kpi } from "./kpi-ttg_QqCA.mjs";
import { i as fmtNum, r as fmtMw } from "./format-BJ0h-eCC.mjs";
import { i as ZoneScoreChart } from "./charts-CGEYun7-.mjs";
import { g as cn, h as ZONES } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zones-B6nxZh_r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LON_MIN = 88;
var LAT_MIN = 20.7;
function project(lat, lon) {
	return {
		x: 6 + (lon - LON_MIN) / 4.700000000000003 * 72,
		y: 8 + (1 - (lat - LAT_MIN) / 6) * 108
	};
}
function ZoneMap({ active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 125",
			className: "h-full w-full",
			role: "img",
			"aria-label": "Bangladesh zone plot",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "100",
					height: "125",
					fill: "transparent"
				}),
				[
					0,
					25,
					50,
					75,
					100
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: 0,
					x2: x,
					y2: 125,
					stroke: "currentColor",
					className: "text-border",
					strokeWidth: "0.3"
				}, `v${x}`)),
				[
					0,
					25,
					50,
					75,
					100,
					125
				].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: 0,
					y1: y,
					x2: 100,
					y2: y,
					stroke: "currentColor",
					className: "text-border",
					strokeWidth: "0.3"
				}, `h${y}`)),
				ZONES.map((z) => {
					const { x, y } = project(z.lat, z.lon);
					const selected = active === z.name;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						transform: `translate(${x} ${y})`,
						className: "cursor-pointer",
						onClick: () => onSelect?.(z.name),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: selected ? 3.4 : 2.4,
							fill: selected ? "var(--color-accent)" : "var(--color-foreground)",
							opacity: selected ? 1 : .7
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
							x: 4.2,
							y: 1.4,
							fontSize: "3.4",
							fill: "var(--color-muted)",
							className: cn(selected && "fill-accent"),
							children: [
								z.rank,
								" ",
								z.name
							]
						})]
					}, z.name);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "absolute bottom-3 left-3 text-[11px] uppercase tracking-wider text-subtle",
			children: "Lat/lon plot · 9 PGCB zones"
		})]
	});
}
function ZonesPage() {
	const [active, setActive] = (0, import_react.useState)("Rangpur");
	const zone = ZONES.find((z) => z.name === active) ?? ZONES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Geography",
				title: "Nine-zone atlas",
				description: "Bangladesh split into nine PGCB operational zones. Each is scored on solar, wind, biomass and waste so LoadShield and siting share one ranking.",
				badge: "LIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneMap, {
					active,
					onSelect: setActive
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wider text-subtle",
							children: ["Rank ", zone.rank]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-2xl font-medium",
							children: zone.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: zone.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Solar 24 h",
									value: zone.solarMwh.toFixed(2),
									unit: "MWh / 1 MW"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Wind 24 h",
									value: zone.windMwh.toFixed(2),
									unit: "MWh / 1 MW"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Biomass",
									value: fmtNum(zone.biomassMw, 0),
									unit: "MW"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
									label: "Waste",
									value: zone.wasteMw.toFixed(2),
									unit: "MW"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs text-subtle",
							children: [
								zone.lat.toFixed(2),
								"° N · ",
								zone.lon.toFixed(2),
								"° E · combined score ",
								zone.score.toFixed(2)
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneScoreChart, { rows: ZONES.map((z) => ({
				name: z.name,
				solar: z.solarMwh,
				wind: z.windMwh
			})) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(z.name),
					className: `rounded-xl bg-surface p-5 text-left shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_10%,transparent)] transition-colors ${active === z.name ? "bg-elevated" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-medium",
								children: z.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted",
								children: z.rank
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm text-muted",
							children: z.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-mono text-xs tabular-nums text-accent",
							children: [
								"Score ",
								z.score.toFixed(1),
								" · Biomass ",
								fmtMw(z.biomassMw, 0)
							]
						})
					]
				}, z.name))
			})
		]
	});
}
//#endregion
export { ZonesPage as component };
