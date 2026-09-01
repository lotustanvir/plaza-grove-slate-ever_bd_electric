import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as cn } from "./router-C9A55M8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-D7Elm-Uu.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase", {
	variants: { tone: {
		default: "bg-elevated text-muted",
		accent: "bg-accent/15 text-accent",
		ok: "bg-ok/15 text-ok",
		warn: "bg-warn/15 text-warn",
		danger: "bg-danger/15 text-danger"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
var MAP = {
	OFFICIAL_PGCB: {
		label: "Official PGCB",
		tone: "ok"
	},
	LIVE: {
		label: "Live",
		tone: "accent"
	},
	MODEL_FORECAST: {
		label: "Model forecast",
		tone: "accent"
	},
	CALCULATED: {
		label: "Calculated",
		tone: "default"
	},
	PROJECT: {
		label: "Project data",
		tone: "warn"
	},
	PROTOTYPE: {
		label: "Prototype",
		tone: "warn"
	}
};
function DataClassBadge({ value }) {
	const item = MAP[value];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: item.tone,
		children: item.label
	});
}
function PageHeader({ kicker, title, description, badge, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl space-y-2",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-accent",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-medium tracking-tight sm:text-4xl",
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted sm:text-base",
					children: description
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataClassBadge, { value: badge }) : null, extra]
		})]
	});
}
//#endregion
export { DataClassBadge as n, PageHeader as r, Badge as t };
