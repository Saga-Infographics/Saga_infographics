import { at as head, ah as ensure_array_like, an as attr_class, aq as escape_html, al as spread_props } from '../../../chunks/server.js-DkuXqxIf.js';
import { I as Icon } from '../../../chunks/Icon.js-DjS0d1yF.js';
import { A as Arrow_up_right } from '../../../chunks/ui.svelte.js-j8n1nWIW.js';
import 'clsx';
import '../../../chunks/shared.js-CcLTIra1.js';

//#region node_modules/@lucide/svelte/dist/icons/globe.svelte
function Globe($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "globe",
		"size": 24,
		"node": [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "10"
			}],
			["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
			["path", { "d": "M2 12h20" }]
		]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/users.svelte
function Users($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "users",
		"size": 24,
		"node": [
			["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
			["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }],
			["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
			["circle", {
				"cx": "9",
				"cy": "7",
				"r": "4"
			}]
		]
	} }]));
}
//#endregion
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const pillars = [
			{
				n: "01",
				wrap: "bg-saga/10 text-saga",
				title: "Pacing & Hook Mastery",
				desc: "We study short-form retention graphs daily to ensure every caption, sound effect, and visual pattern interrupt drives watch time."
			},
			{
				n: "02",
				wrap: "bg-blue-500/10 text-blue-600",
				title: "Uncompromising Speed",
				desc: "Strict 48-hour SLAs. Never miss a trend window or release schedule again."
			},
			{
				n: "03",
				wrap: "bg-emerald-500/10 text-emerald-600",
				title: "Seamless Communication",
				desc: "Direct Slack access to your account managers and editors. Zero bureaucracy."
			}
		];
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>About — Saga Infographics</title>`);
			});
			$$renderer.push(`<meta name="description" content="Saga is a Kathmandu-based, remote-first digital &amp; creative agency delivering 500+ videos and web projects every month for global creators and brands."/>`);
		});
		$$renderer.push(`<div class="py-12 bg-canvas min-h-screen"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ ABOUT SAGA ]</div> <h1 class="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-tight">We are Saga — Nepal's premier <span class="font-serif-italic text-saga font-normal">digital &amp; creative agency</span></h1> <p class="mt-4 text-base text-neutral-600 leading-relaxed">Bridging elite video editors, motion creators, and full-stack web developers from Kathmandu
        to global creators and brands.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20"><div class="space-y-4"><h2 class="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">Our Mission: Democratizing viral video &amp; high-performance code.</h2> <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">Founded in Kathmandu, Nepal, Saga (saga.com.np) started with a simple belief: attention is
          the most valuable currency on the internet. We craft short-form content and digital
          interfaces that hook viewers within 3 seconds and convert them into loyal fans.</p> <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">Today, our remote-first team supports founders, creators, and agencies across the US,
          Europe, Asia, and Australia, delivering over 500+ videos and web projects every month.</p> <div class="pt-2 flex flex-wrap gap-3"><span class="px-3 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 flex items-center gap-1.5">`);
		Globe($$renderer, { class: "w-3.5 h-3.5 text-saga" });
		$$renderer.push(`<!----> Kathmandu &amp; Global Hubs</span> <span class="px-3 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 flex items-center gap-1.5">`);
		Users($$renderer, { class: "w-3.5 h-3.5 text-blue-600" });
		$$renderer.push(`<!----> 45+ In-House Editors &amp; Devs</span></div></div> <div class="rounded-[28px] overflow-hidden border border-neutral-200 shadow-xl aspect-[4/3] bg-neutral-900 relative group"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Saga Nepal Team Studio" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div> <div class="absolute bottom-6 left-6 right-6 text-white text-xs font-semibold bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">⚡ Saga Creative Studio — Kathmandu, Nepal</div></div></div> <div class="bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-200/90 shadow-xs mb-20"><h3 class="text-2xl font-extrabold text-ink tracking-tight mb-8 text-center">The Core Pillars of <span class="font-serif-italic text-saga">Saga</span></h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
		const each_array = ensure_array_like(pillars);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let p = each_array[$$index];
			$$renderer.push(`<div class="p-6 rounded-2xl bg-canvas border border-neutral-200"><div${attr_class(`w-10 h-10 rounded-xl ${p.wrap} flex items-center justify-center mb-4 font-bold`)}>${escape_html(p.n)}</div> <h4 class="text-base font-bold text-ink mb-2">${escape_html(p.title)}</h4> <p class="text-xs text-neutral-600 leading-relaxed">${escape_html(p.desc)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="text-center bg-ink text-white p-10 rounded-[32px] shadow-xl"><h3 class="text-2xl sm:text-3xl font-extrabold mb-3">Work with Saga today</h3> <p class="text-xs text-neutral-400 max-w-md mx-auto mb-6">Let our pre-vetted team take your video editing and digital presence off your plate.</p> <button class="bg-saga hover:bg-saga-dark text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-lg">Book Free Meeting `);
		Arrow_up_right($$renderer, { class: "w-4 h-4" });
		$$renderer.push(`<!----></button></div></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-DOVzeJwr.js.map
