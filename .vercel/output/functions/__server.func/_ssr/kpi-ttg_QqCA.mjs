import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as cn } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kpi-ttg_QqCA.js
var import_jsx_runtime = require_jsx_runtime();
function Kpi({ label, value, unit, hint, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("mt-2 font-mono text-2xl font-medium tabular-nums leading-none", tone === "danger" && "text-danger", tone === "ok" && "text-ok", tone === "warn" && "text-warn"),
				children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-xs font-normal text-muted",
					children: unit
				}) : null]
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { Kpi as t };
