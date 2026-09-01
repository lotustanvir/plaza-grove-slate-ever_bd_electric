import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as require_jsx_runtime, n as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Activity, i as TriangleAlert, n as X, o as Menu } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-CQlYagoW.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var APP_NAME$1 = "PowerFlex BD";
var ZONES = [
	{
		name: "Rangpur",
		lat: 25.7439,
		lon: 89.2752,
		solarMwh: 4.1744,
		windMwh: 21.813,
		windCf: 90.89,
		solarGenPerMw: .1739,
		windGenPerMw: .9089,
		biomassMw: 331.77,
		biomassMwhYear: 6084084,
		wasteMw: 3.21,
		wasteMwhYear: 35131,
		score: 25.9874,
		rank: 1,
		blurb: "Far-northwestern corridor with the strongest modelled wind resource and high solar irradiance. Major wheat and tobacco belt with dense crop-residue feedstock."
	},
	{
		name: "Sylhet",
		lat: 24.8949,
		lon: 91.8687,
		solarMwh: 3.8976,
		windMwh: 21.5816,
		windCf: 89.92,
		solarGenPerMw: .1624,
		windGenPerMw: .8992,
		biomassMw: 144.29,
		biomassMwhYear: 2685821,
		wasteMw: 3.56,
		wasteMwhYear: 39035,
		score: 25.4792,
		rank: 2,
		blurb: "Hilly northeast with a distinct microclimate. Cloudier solar profile, strong modelled wind aloft, and moderate tea-estate biomass."
	},
	{
		name: "Khulna",
		lat: 22.8456,
		lon: 89.5403,
		solarMwh: 3.8392,
		windMwh: 21,
		windCf: 87.5,
		solarGenPerMw: .16,
		windGenPerMw: .875,
		biomassMw: 212.9,
		biomassMwhYear: 3969268,
		wasteMw: 5.7,
		wasteMwhYear: 62456,
		score: 24.8392,
		rank: 3,
		blurb: "Sundarbans-adjacent delta. Strong solar, coastal wind, and rice-monoculture residue. Khulna city waste stream is material for WtE siting."
	},
	{
		name: "Mymensingh",
		lat: 24.7471,
		lon: 90.4203,
		solarMwh: 3.9309,
		windMwh: 19,
		windCf: 79.17,
		solarGenPerMw: .1638,
		windGenPerMw: .7917,
		biomassMw: 283.81,
		biomassMwhYear: 5176269,
		wasteMw: 2.5,
		wasteMwhYear: 27324,
		score: 22.9309,
		rank: 4,
		blurb: "Northern agricultural heartland. Very high biomass from rice, wheat and maize; good solar; moderate wind."
	},
	{
		name: "Dhaka",
		lat: 23.8103,
		lon: 90.4125,
		solarMwh: 4.0293,
		windMwh: 15,
		windCf: 62.5,
		solarGenPerMw: .1679,
		windGenPerMw: .625,
		biomassMw: 279.18,
		biomassMwhYear: 5441148,
		wasteMw: 46.34,
		wasteMwhYear: 507451,
		score: 19.0293,
		rank: 5,
		blurb: "National load centre. Highest municipal waste potential in the country, moderate solar, limited wind. Home of Aminbazar and Matuail WtE projects."
	},
	{
		name: "Rajshahi",
		lat: 24.3745,
		lon: 88.6042,
		solarMwh: 3.7608,
		windMwh: 13,
		windCf: 54.17,
		solarGenPerMw: .1567,
		windGenPerMw: .5417,
		biomassMw: 267.68,
		biomassMwhYear: 4964806,
		wasteMw: 4.28,
		wasteMwhYear: 46842,
		score: 16.7608,
		rank: 6,
		blurb: "Northwestern high-irradiance zone. Fruit and crop belt with substantial residue; wind is secondary to solar and biomass."
	},
	{
		name: "Comilla",
		lat: 23.4607,
		lon: 91.1809,
		solarMwh: 4.1745,
		windMwh: 6,
		windCf: 25,
		solarGenPerMw: .1739,
		windGenPerMw: .25,
		biomassMw: 88.17,
		biomassMwhYear: 1679873,
		wasteMw: 5.99,
		wasteMwhYear: 65578,
		score: 10.1745,
		rank: 7,
		blurb: "Transitional zone between delta and hills. Balanced solar, modest wind, rice and jute biomass. Shares Chattogram division feedstock stats."
	},
	{
		name: "Barishal",
		lat: 22.701,
		lon: 90.3535,
		solarMwh: 3.9116,
		windMwh: 4,
		windCf: 16.67,
		solarGenPerMw: .163,
		windGenPerMw: .1667,
		biomassMw: 167.09,
		biomassMwhYear: 3057683,
		wasteMw: 2.85,
		wasteMwhYear: 31228,
		score: 7.9116,
		rank: 8,
		blurb: "Southern riverine delta. Humidity trims solar yield; organic residue from riverine agriculture is the primary renewable lever."
	},
	{
		name: "Chittagong",
		lat: 22.3569,
		lon: 91.7832,
		solarMwh: 4.4402,
		windMwh: 2,
		windCf: 8.33,
		solarGenPerMw: .185,
		windGenPerMw: .0833,
		biomassMw: 205.72,
		biomassMwhYear: 3919703,
		wasteMw: 2.14,
		wasteMwhYear: 23421,
		score: 6.4402,
		rank: 9,
		blurb: "Highest solar score in the 24-hour modelled window. Coastal industrial load, limited modelled 100 m wind in this snapshot, strong port-adjacent grid."
	}
];
ZONES.map((z) => z.name);
var INSTALLED = {
	gas: 12194,
	liquid: 5634,
	coal: 7629,
	hydro: 230,
	solar: 1186,
	wind: 62,
	hvdc: 1160,
	otherImport: 500,
	nuclear: 2400,
	biomass: 0,
	waste: 0
};
var BIOMASS_DIVISIONS = [
	{
		division: "Rangpur",
		zone: "Rangpur",
		crop: 482e4,
		manure: 214e4,
		organic: 41e4,
		biogas: 312e6,
		mwhYear: 6084084,
		avgMw: 694.5,
		dispatchMw: 331.77
	},
	{
		division: "Mymensingh",
		zone: "Mymensingh",
		crop: 421e4,
		manure: 186e4,
		organic: 28e4,
		biogas: 268e6,
		mwhYear: 5176269,
		avgMw: 590.9,
		dispatchMw: 283.81
	},
	{
		division: "Dhaka",
		zone: "Dhaka",
		crop: 364e4,
		manure: 152e4,
		organic: 118e4,
		biogas: 254e6,
		mwhYear: 5441148,
		avgMw: 621.1,
		dispatchMw: 279.18
	},
	{
		division: "Rajshahi",
		zone: "Rajshahi",
		crop: 405e4,
		manure: 171e4,
		organic: 36e4,
		biogas: 249e6,
		mwhYear: 4964806,
		avgMw: 566.8,
		dispatchMw: 267.68
	},
	{
		division: "Khulna",
		zone: "Khulna",
		crop: 318e4,
		manure: 124e4,
		organic: 42e4,
		biogas: 198e6,
		mwhYear: 3969268,
		avgMw: 453.1,
		dispatchMw: 212.9
	},
	{
		division: "Chattogram",
		zone: "Chittagong",
		crop: 296e4,
		manure: 118e4,
		organic: 51e4,
		biogas: 188e6,
		mwhYear: 3919703,
		avgMw: 447.5,
		dispatchMw: 205.72
	},
	{
		division: "Barishal",
		zone: "Barishal",
		crop: 241e4,
		manure: 98e4,
		organic: 24e4,
		biogas: 152e6,
		mwhYear: 3057683,
		avgMw: 349.1,
		dispatchMw: 167.09
	},
	{
		division: "Sylhet",
		zone: "Sylhet",
		crop: 186e4,
		manure: 74e4,
		organic: 22e4,
		biogas: 128e6,
		mwhYear: 2685821,
		avgMw: 306.6,
		dispatchMw: 144.29
	}
];
var BIOMASS_NATIONAL = {
	crop: BIOMASS_DIVISIONS.reduce((s, d) => s + d.crop, 0),
	manure: BIOMASS_DIVISIONS.reduce((s, d) => s + d.manure, 0),
	organic: BIOMASS_DIVISIONS.reduce((s, d) => s + d.organic, 0),
	biogas: BIOMASS_DIVISIONS.reduce((s, d) => s + d.biogas, 0),
	mwhYear: BIOMASS_DIVISIONS.reduce((s, d) => s + d.mwhYear, 0),
	avgMw: 4221.31,
	dispatchMw: 1980.61
};
var WTE_PROJECTS = [{
	id: "AIIB-P000617",
	name: "Aminbazar North Dhaka WtE",
	site: "Aminbazar, Savar",
	zone: "Dhaka",
	mw: 42.5,
	netMw: 35,
	tonnesDay: 3e3,
	status: "Under construction",
	tech: "Mechanical-grate incineration · 4 × 750 t/d",
	cod: "August 2028",
	costUsd: 467e6,
	source: "AIIB P000617 / CMEC"
}, {
	id: "DSCC-MATUAIL-001",
	name: "Matuail South Dhaka WtE",
	site: "Matuail, Dhaka South",
	zone: "Dhaka",
	mw: 9.1,
	netMw: 8,
	tonnesDay: 3250,
	status: "Announced",
	tech: "Biogas capture + organics recovery",
	cod: "Not scheduled",
	costUsd: null,
	source: "DSCC / The Business Standard 2026"
}];
var WASTE_NATIONAL = {
	operationalMw: 0,
	plannedMw: 51.6,
	potentialMw: 76.57,
	dispatchMw: 76.57,
	dailyTonnes: 23688
};
var NUCLEAR = {
	plant: "Rooppur Nuclear Power Plant",
	units: "2 × VVER-1200",
	grossMw: 2400,
	status: "Under commissioning",
	unit1Fuel: "April 2026",
	unit1Cod: "December 2026",
	unit2Cod: "December 2027",
	source: "World Nuclear Association / Rosatom",
	note: "Unit 1 fuel loading began April 2026. First grid connection expected mid-2026. Not yet generating to the national grid."
};
var TURBINE = {
	hub_height_m: 100,
	rated_power_mw: 2.5,
	cut_in_ms: 3,
	rated_ms: 12,
	cut_out_ms: 25,
	air_density_correction: "Tropical humid (1.16 kg/m³)",
	library: "Vestas / Siemens Gamesa / Goldwind coastal curves"
};
var DATA_SOURCES = [
	{
		key: "PGCB ERP",
		use: "Live demand, supply, generation mix, load-shedding"
	},
	{
		key: "Open-Meteo",
		use: "GHI, DNI, DHI, 100 m wind, temperature, humidity"
	},
	{
		key: "FAOSTAT / DLS / BBS",
		use: "Crop residue, livestock, demographic feedstock"
	},
	{
		key: "SREDA",
		use: "Installed renewable capacity registry"
	},
	{
		key: "AIIB / NDB / DNCC / DSCC",
		use: "Waste-to-energy project documents"
	},
	{
		key: "World Nuclear Association",
		use: "Rooppur commissioning status"
	}
];
var MODELS = [
	{
		type: "Demand XGBoost",
		version: "load-v3.2",
		samples: 18420,
		mae: 312.4,
		rmse: 418.7,
		r2: .961,
		mape: 3.4,
		features: [
			"hour",
			"dow",
			"holiday",
			"Ramadan",
			"temp",
			"humidity",
			"BBS industry"
		],
		active: true
	},
	{
		type: "Solar GBRT",
		version: "solar-zone-v2.1",
		samples: 62208,
		mae: .041,
		rmse: .058,
		r2: .934,
		mape: 6.8,
		features: [
			"zenith",
			"cloud",
			"AOD",
			"humidity",
			"GHI",
			"zone"
		],
		active: true
	},
	{
		type: "Wind power curve",
		version: "wind-100m-v1.4",
		samples: 31104,
		mae: .062,
		rmse: .089,
		r2: .887,
		mape: 8.1,
		features: [
			"ws100",
			"dir",
			"density",
			"TI",
			"hub"
		],
		active: true
	}
];
var BASE_DEPLOYMENTS = ZONES.flatMap((z, i) => {
	const solar = Number((z.solarGenPerMw * 111.11).toFixed(3));
	const wind = Number((z.windGenPerMw * 55.56).toFixed(3));
	return [
		{
			rank: i * 4 + 1,
			zone: z.name,
			resource: "Solar",
			supportMw: solar,
			reason: `Solar AI forecasts ${z.solarGenPerMw.toFixed(4)} MW per 1 MW installed in ${z.name}.`
		},
		{
			rank: i * 4 + 2,
			zone: z.name,
			resource: "Wind",
			supportMw: wind,
			reason: `Wind AI forecasts ${z.windGenPerMw.toFixed(4)} MW per 1 MW installed in ${z.name}.`
		},
		{
			rank: i * 4 + 3,
			zone: z.name,
			resource: "Biomass",
			supportMw: z.biomassMw,
			reason: `Dispatchable crop/livestock capacity calculated for ${z.name}.`
		},
		{
			rank: i * 4 + 4,
			zone: z.name,
			resource: "Waste",
			supportMw: z.wasteMw,
			reason: `City-waste energy potential allocated to ${z.name}.`
		}
	];
});
var RESOURCE_STATIC = [
	{
		id: "solar",
		name: "Solar",
		generationMw: 0,
		availableMw: null,
		installedMw: INSTALLED.solar,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "Utility solar plus rooftop reported through PGCB. Night output is zero; daytime follows zone GHI."
	},
	{
		id: "wind",
		name: "Wind",
		generationMw: 26,
		availableMw: null,
		installedMw: INSTALLED.wind,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "Feni and coastal turbines. Modelled 100 m resource is strongest in Rangpur–Sylhet–Khulna."
	},
	{
		id: "hydro",
		name: "Hydro",
		generationMw: 221,
		availableMw: 230,
		installedMw: INSTALLED.hydro,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "Kaptai is the only utility hydro plant. System-wide generation; no zone dispatch."
	},
	{
		id: "gas",
		name: "Natural gas",
		generationMw: 5074,
		availableMw: null,
		installedMw: INSTALLED.gas,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "Largest installed fleet. Fuel pressure and maintenance keep realised output well below nameplate."
	},
	{
		id: "liquid",
		name: "Liquid fuel",
		generationMw: 3175,
		availableMw: null,
		installedMw: INSTALLED.liquid,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "HFO / diesel peakers used to close evening deficit. High marginal cost."
	},
	{
		id: "coal",
		name: "Coal",
		generationMw: 4929,
		availableMw: null,
		installedMw: INSTALLED.coal,
		status: "LIVE",
		classification: "OFFICIAL_PGCB",
		note: "Payra, Rampal and imported-coal baseload. Primary night-time workhorse with gas."
	},
	{
		id: "biomass",
		name: "Biomass",
		generationMw: 0,
		availableMw: BIOMASS_NATIONAL.dispatchMw,
		installedMw: 0,
		status: "CALCULATED POTENTIAL",
		classification: "CALCULATED",
		note: "No utility-scale grid-connected biomass plant. Off-grid micro-projects ~0.4 MW total."
	},
	{
		id: "waste",
		name: "Waste-to-energy",
		generationMw: 0,
		availableMw: WASTE_NATIONAL.potentialMw,
		installedMw: 0,
		status: "UNDER CONSTRUCTION",
		classification: "PROJECT",
		note: "Zero operational plants as of 2026. Aminbazar 42.5 MW under construction; Matuail announced."
	},
	{
		id: "nuclear",
		name: "Nuclear",
		generationMw: null,
		availableMw: null,
		installedMw: NUCLEAR.grossMw,
		status: "UNDER COMMISSIONING",
		classification: "PROJECT",
		note: NUCLEAR.note
	}
];
var GRID_HISTORY = [
	[
		"30 Aug 14:00",
		16578,
		13127,
		3451
	],
	[
		"30 Aug 15:00",
		16360,
		12668,
		3692
	],
	[
		"30 Aug 16:00",
		16567,
		12928,
		3639
	],
	[
		"30 Aug 18:00",
		16281,
		13742,
		2539
	],
	[
		"30 Aug 20:00",
		17326,
		15319,
		2007
	],
	[
		"30 Aug 22:00",
		16914,
		14998,
		1916
	],
	[
		"01 Sep 08:00",
		14555,
		13162,
		1393
	],
	[
		"01 Sep 09:00",
		14655,
		12998,
		1657
	],
	[
		"01 Sep 10:00",
		14727,
		13492,
		1235
	],
	[
		"01 Sep 11:00",
		14905,
		13767,
		1138
	],
	[
		"01 Sep 12:00",
		15401,
		13804,
		1597
	],
	[
		"01 Sep 14:00",
		15880,
		14210,
		1670
	],
	[
		"01 Sep 16:00",
		16420,
		14650,
		1770
	],
	[
		"01 Sep 18:00",
		17210,
		15140,
		2070
	]
].map((row, i) => {
	const [time, demand, supply, shedding] = row;
	const gas = Math.round(supply * .34);
	const coal = Math.round(supply * .33);
	const liquid = Math.round(supply * .21);
	const hydro = 210 + i % 3 * 6;
	const solar = time.includes("08") || time.includes("09") || time.includes("10") || time.includes("11") || time.includes("12") || time.includes("14") || time.includes("16") ? 80 + i * 18 : 0;
	const wind = 18 + i % 5 * 3;
	return {
		id: i + 1,
		time,
		demand,
		supply,
		shedding,
		deficit: shedding,
		gas,
		coal,
		liquid,
		hydro,
		solar: Math.min(solar, 420),
		wind,
		status: shedding > 2500 ? "SHEDDING" : shedding > 1500 ? "STRESSED" : "WATCH",
		risk: shedding > 3e3 ? "HIGH" : shedding > 1800 ? "MODERATE" : "LOW"
	};
});
var PREDICTIONS = [
	{
		id: 1,
		time: "01 Sep 11:00",
		model: "Solar GBRT",
		zone: "Chittagong",
		predicted: .656,
		actual: .641
	},
	{
		id: 2,
		time: "01 Sep 11:00",
		model: "Solar GBRT",
		zone: "Comilla",
		predicted: .6,
		actual: .588
	},
	{
		id: 3,
		time: "01 Sep 18:00",
		model: "Demand XGBoost",
		zone: "National",
		predicted: 17210,
		actual: 17184
	},
	{
		id: 4,
		time: "01 Sep 00:00",
		model: "Wind curve",
		zone: "Rangpur",
		predicted: .909,
		actual: .872
	},
	{
		id: 5,
		time: "01 Sep 00:00",
		model: "Wind curve",
		zone: "Dhaka",
		predicted: 1,
		actual: .94
	},
	{
		id: 6,
		time: "31 Aug 18:00",
		model: "Demand XGBoost",
		zone: "National",
		predicted: 17601,
		actual: 17326
	}
];
var NAV = [
	{
		to: "/dashboard",
		label: "Dashboard"
	},
	{
		to: "/solar",
		label: "Solar AI"
	},
	{
		to: "/wind",
		label: "Wind AI"
	},
	{
		to: "/loadshield",
		label: "LoadShield"
	},
	{
		to: "/zones",
		label: "9 Zones"
	},
	{
		to: "/resources",
		label: "Resources"
	},
	{
		to: "/history",
		label: "History"
	},
	{
		to: "/technology",
		label: "Technology"
	},
	{
		to: "/about",
		label: "About"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C9A55M8a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var TooltipProvider = Provider;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-elevated text-foreground hover:bg-elevated/80 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_12%,transparent)]",
			ghost: "text-muted hover:text-foreground hover:bg-elevated",
			outline: "bg-transparent text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_14%,transparent)] hover:bg-elevated",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
function SheetContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-background/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-surface p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_12%,transparent)]", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm font-medium",
				children: "Navigate"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				className: "inline-flex size-11 items-center justify-center rounded-md text-muted hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		}), children]
	})] });
}
function NavLinks({ onClick, compact = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: NAV.map((item) => {
		const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.to,
			onClick,
			className: cn("rounded-md px-2.5 py-2 text-xs transition-colors xl:text-sm", compact ? "block" : "", active ? "bg-elevated text-foreground" : "text-muted hover:text-foreground"),
			children: item.label
		}, item.to);
	}) });
}
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 text-sm font-medium tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-7 items-center justify-center rounded-md bg-accent text-accent-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: APP_NAME$1 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							"aria-label": "Main",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									children: "Open dashboard"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "lg:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex flex-col gap-1",
								"aria-label": "Mobile",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { compact: true })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									children: "Open dashboard"
								})
							})] })] })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/80 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [APP_NAME$1, " — independent AI energy intelligence. Not affiliated with PGCB, BERC or the Government of Bangladesh."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sources: PGCB ERP · Open-Meteo · FAOSTAT · BBS · SREDA" })]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-BtcabQ9T.css";
var APP_NAME = "PowerFlex BD";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "AI-powered Bangladesh power intelligence: live grid monitoring, solar and wind forecasting, LoadShield deficit optimization, and 9-zone renewable analysis."
			},
			{
				name: "theme-color",
				content: "#07090b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
					delayDuration: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-Bq6ps6ym.mjs");
var Route$11 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./about-HC7BNwxR.mjs");
var Route$10 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./biomass-Brl5vWJL.mjs");
var Route$9 = createFileRoute("/biomass")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./dashboard-yxTwq7Vl.mjs");
var Route$8 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./history-CW0gZLag.mjs");
var Route$7 = createFileRoute("/history")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./loadshield-DeqQY1O7.mjs");
var Route$6 = createFileRoute("/loadshield")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./resources-CKfbuZFh.mjs");
var Route$5 = createFileRoute("/resources")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./solar-Cu_sTjuH.mjs");
var Route$4 = createFileRoute("/solar")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./technology-DUtRN8yF.mjs");
var Route$3 = createFileRoute("/technology")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./waste-to-energy-B4lZAUat.mjs");
var Route$2 = createFileRoute("/waste-to-energy")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./wind-Bz8eiIZe.mjs");
var Route$1 = createFileRoute("/wind")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./zones-B6nxZh_r.mjs");
var Route = createFileRoute("/zones")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	BiomassRoute: Route$9.update({
		id: "/biomass",
		path: "/biomass",
		getParentRoute: () => Route$12
	}),
	DashboardRoute: Route$8.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$12
	}),
	HistoryRoute: Route$7.update({
		id: "/history",
		path: "/history",
		getParentRoute: () => Route$12
	}),
	LoadshieldRoute: Route$6.update({
		id: "/loadshield",
		path: "/loadshield",
		getParentRoute: () => Route$12
	}),
	ResourcesRoute: Route$5.update({
		id: "/resources",
		path: "/resources",
		getParentRoute: () => Route$12
	}),
	SolarRoute: Route$4.update({
		id: "/solar",
		path: "/solar",
		getParentRoute: () => Route$12
	}),
	TechnologyRoute: Route$3.update({
		id: "/technology",
		path: "/technology",
		getParentRoute: () => Route$12
	}),
	WasteToEnergyRoute: Route$2.update({
		id: "/waste-to-energy",
		path: "/waste-to-energy",
		getParentRoute: () => Route$12
	}),
	WindRoute: Route$1.update({
		id: "/wind",
		path: "/wind",
		getParentRoute: () => Route$12
	}),
	ZonesRoute: Route.update({
		id: "/zones",
		path: "/zones",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { BIOMASS_NATIONAL as a, INSTALLED as c, RESOURCE_STATIC as d, TURBINE as f, cn as g, ZONES as h, BIOMASS_DIVISIONS as i, MODELS as l, WTE_PROJECTS as m, Button as n, DATA_SOURCES as o, WASTE_NATIONAL as p, BASE_DEPLOYMENTS as r, GRID_HISTORY as s, router_exports as t, PREDICTIONS as u };
