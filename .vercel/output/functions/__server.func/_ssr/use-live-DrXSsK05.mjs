import { i as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as bstParts } from "./format-BJ0h-eCC.mjs";
import { r as snapshot, t as buildHourly } from "./live-C5Gy9dQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-live-DrXSsK05.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Shared SSR/hydration seed so the clock cannot mismatch across the first paint. */
var SEED = /* @__PURE__ */ new Date("2026-09-01T13:00:00.000Z");
function useLiveGrid() {
	const [now, setNow] = (0, import_react.useState)(SEED);
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLive(true);
		setNow(/* @__PURE__ */ new Date());
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 4e3);
		return () => window.clearInterval(id);
	}, []);
	return {
		now,
		live,
		grid: snapshot(now, live),
		hourly: buildHourly(now),
		bst: bstParts(now)
	};
}
//#endregion
export { useLiveGrid as t };
