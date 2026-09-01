import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as cn } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-H66vOaCe.js
var import_jsx_runtime = require_jsx_runtime();
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-surface p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_10%,transparent)]", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-wrap items-start justify-between gap-3", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("text-base font-medium text-foreground", className),
		...props
	});
}
function CardDesc({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted", className),
		...props
	});
}
//#endregion
export { CardTitle as i, CardDesc as n, CardHeader as r, Card as t };
