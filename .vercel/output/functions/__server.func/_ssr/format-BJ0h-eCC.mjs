//#region node_modules/.nitro/vite/services/ssr/assets/format-BJ0h-eCC.js
function fmtMw(value, digits = 0) {
	if (value == null || Number.isNaN(value)) return "—";
	return `${value.toLocaleString("en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	})} MW`;
}
function fmtNum(value, digits = 0) {
	if (value == null || Number.isNaN(value)) return "—";
	return value.toLocaleString("en-US", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
function fmtPct(value, digits = 1) {
	if (value == null || Number.isNaN(value)) return "—";
	return `${value.toFixed(digits)}%`;
}
function bstParts(date = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Asia/Dhaka",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23",
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "2-digit"
	}).formatToParts(date);
	const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
	const hour = Number(get("hour"));
	const minute = Number(get("minute"));
	const second = Number(get("second"));
	return {
		hour,
		minute,
		second,
		weekday: get("weekday"),
		day: get("day"),
		month: get("month"),
		year: get("year"),
		hourFrac: hour + minute / 60 + second / 3600,
		label: `${get("weekday")} ${get("day")} ${get("month")} ${get("year")} · ${get("hour")}:${get("minute")}:${get("second")} BST`,
		clock: `${get("hour")}:${get("minute")}:${get("second")} BST`,
		date: `${get("weekday")} ${get("day")} ${get("month")} ${get("year")}`
	};
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
//#endregion
export { fmtPct as a, fmtNum as i, clamp as n, lerp as o, fmtMw as r, bstParts as t };
