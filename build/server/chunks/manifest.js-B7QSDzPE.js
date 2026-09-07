const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.zSOTXo1g.js",app:"_app/immutable/entry/app.Gcaz7n2g.js",imports:["_app/immutable/entry/start.zSOTXo1g.js","_app/immutable/chunks/DnpLroAT.js","_app/immutable/chunks/CyOXwgr4.js","_app/immutable/entry/app.Gcaz7n2g.js","_app/immutable/chunks/CyOXwgr4.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-CNdtR5Co.js')),
			__memo(() => import('./nodes/1.js-KjyLgKoX.js')),
			__memo(() => import('./nodes/2.js-CP3b-VPd.js')),
			__memo(() => import('./nodes/3.js-BmkN6Zpu.js')),
			__memo(() => import('./nodes/4.js-DP8kjZnO.js')),
			__memo(() => import('./nodes/5.js-DjXU_QVQ.js')),
			__memo(() => import('./nodes/6.js-GCe17TUi.js')),
			__memo(() => import('./nodes/7.js-BsX7Okv5.js')),
			__memo(() => import('./nodes/8.js-BM3sNBlO.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export { manifest as m };
//# sourceMappingURL=manifest.js-B7QSDzPE.js.map
