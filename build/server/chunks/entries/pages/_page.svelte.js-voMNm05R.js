import { at as head, ah as ensure_array_like, aq as escape_html, ap as attr, an as attr_class, al as spread_props } from '../../chunks/server.js-DkuXqxIf.js';
import { I as Icon } from '../../chunks/Icon.js-DjS0d1yF.js';
import { A as Arrow_up_right } from '../../chunks/ui.svelte.js-j8n1nWIW.js';
import { C as Circle_check_big, b as PROCESS_STEPS, c as SERVICES } from '../../chunks/content.js-BFuWnKwO.js';
import { C as Clock } from '../../chunks/clock.js-DjIYv8A3.js';
import { B as BrandIcon, Z as Zap } from '../../chunks/BrandIcon.js-B-tjI23l.js';
import { S as ServiceIcon, V as Video } from '../../chunks/ServiceIcon.js-C1qHIN1C.js';
import { P as PricingSection, F as FaqSection } from '../../chunks/FaqSection.js-D7CAKjzq.js';
import 'clsx';
import '../../chunks/shared.js-CcLTIra1.js';
import '../../chunks/legacy-client.js-DAZwnwQx.js';
import '../../chunks/utils2.js-CZQ9Fwo8.js';
import '../../chunks/index-server.js-7PpEqI4r.js';
import 'tailwind-merge';

//#region node_modules/@lucide/svelte/dist/icons/award.svelte
function Award($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "award",
		"size": 24,
		"node": [["path", { "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }], ["circle", {
			"cx": "12",
			"cy": "8",
			"r": "6"
		}]]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/dollar-sign.svelte
function Dollar_sign($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "dollar-sign",
		"size": 24,
		"node": [["line", {
			"x1": "12",
			"x2": "12",
			"y1": "2",
			"y2": "22"
		}], ["path", { "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/eye.svelte
function Eye($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "eye",
		"size": 24,
		"node": [["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", {
			"cx": "12",
			"cy": "12",
			"r": "3"
		}]]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/flame.svelte
function Flame($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "flame",
		"size": 24,
		"node": [["path", { "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" }]]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/shield-check.svelte
function Shield_check($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "shield-check",
		"size": 24,
		"node": [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]]
	} }]));
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section class="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-canvas"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"><div class="relative max-w-5xl mx-auto py-2"><div class="hidden sm:block absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] pointer-events-none -z-10 opacity-90"><div class="w-full h-full rounded-full border border-dashed border-neutral-300/60 animate-orbit-ring relative"><div class="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-auto"><div class="animate-orbit-counter"><div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform">`);
		Flame($$renderer, { class: "w-full h-full text-saga" });
		$$renderer.push(`<!----></div></div></div> <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto"><div class="animate-orbit-counter"><div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform">`);
		Shield_check($$renderer, { class: "w-full h-full text-blue-600" });
		$$renderer.push(`<!----></div></div></div> <div class="absolute top-1/2 -right-4 -translate-y-1/2 pointer-events-auto"><div class="animate-orbit-counter"><div class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform">`);
		BrandIcon($$renderer, {
			name: "youtube",
			class: "w-full h-full text-[#FF0000]"
		});
		$$renderer.push(`<!----></div></div></div> <div class="absolute top-1/2 -left-4 -translate-y-1/2 pointer-events-auto"><div class="animate-orbit-counter"><div class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform">`);
		Zap($$renderer, { class: "w-full h-full text-amber-500" });
		$$renderer.push(`<!----></div></div></div></div></div> <div class="relative z-20"><h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink tracking-tight leading-[1.1] max-w-4xl mx-auto">Agency that makes your  <span class="inline-flex items-center gap-1.5 md:gap-2"><span class="font-serif-italic text-saga font-normal">videos &amp; reels</span> <span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-saga text-white p-2 shadow-md shadow-saga/30 shrink-0 align-middle">`);
		BrandIcon($$renderer, {
			name: "instagram",
			class: "w-full h-full"
		});
		$$renderer.push(`<!----></span> <span class="font-serif-italic text-saga font-normal">viral</span></span></h1> <p class="mt-5 text-base sm:text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">Short-form video editing, web engineering &amp; digital production for Influencers, Creators
          and Brands.</p> <div class="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-20"><button class="bg-ink hover:bg-black text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer">Book A Free Meeting `);
		Arrow_up_right($$renderer, { class: "w-4 h-4 text-saga" });
		$$renderer.push(`<!----></button></div></div></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/ProcessSection.svelte
function ProcessSection($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section class="py-20 bg-canvas"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ PROCESS ]</div> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">How Saga turns your raw content into <span class="font-serif-italic text-saga font-normal">viral growth</span></h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
		const each_array = ensure_array_like(PROCESS_STEPS);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let step = each_array[$$index];
			$$renderer.push(`<div class="bg-white rounded-[24px] border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"><div><div class="inline-block bg-canvas border border-neutral-200 text-neutral-900 text-xs font-bold px-3 py-1 rounded-lg mb-5 group-hover:bg-saga group-hover:text-white group-hover:border-saga transition-colors">[ ${escape_html(step.number)} ]</div> <h3 class="text-xl font-bold text-ink tracking-tight mb-3 group-hover:text-saga transition-colors leading-snug">${escape_html(step.title)}</h3> <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">${escape_html(step.description)}</p></div> <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-100"><img${attr("src", step.imageUrl)}${attr("alt", step.alt)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/> <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div></div></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="mt-12 text-center"><button class="bg-ink hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-xs hover:scale-[1.02] cursor-pointer">Start Your First Video / Project `);
		Arrow_up_right($$renderer, { class: "w-4 h-4 text-saga" });
		$$renderer.push(`<!----></button></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/ShortStorySection.svelte
function ShortStorySection($$renderer) {
	const stats = [
		{
			icon: Eye,
			iconWrap: "bg-saga/10 text-saga",
			value: "1M+",
			label: "Total Organic Views",
			desc: "Driven across YouTube Shorts, Instagram Reels, and TikTok algorithms."
		},
		{
			icon: Video,
			iconWrap: "bg-blue-500/10 text-blue-600",
			value: "100+",
			label: "Videos & Apps Delivered",
			desc: "Edited and engineered with strict 48-hour turnaround benchmarks."
		},
		{
			icon: Dollar_sign,
			iconWrap: "bg-emerald-500/10 text-emerald-600",
			value: "NPR 5 Lakh+",
			label: "Client Revenue Generated",
			desc: "Turned audience attention into direct sales, sponsorships, and conversions."
		}
	];
	$$renderer.push(`<section class="py-20 bg-canvas border-t border-neutral-200/60"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-6">[ OUR SHORT STORY ]</div> <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight leading-relaxed max-w-4xl mx-auto">We're a <span class="px-3 py-1 rounded-xl bg-saga/10 text-saga font-bold border border-saga/20">short-form</span> video editing and digital agency helping creators and brands turn raw clips into <span class="px-3 py-1 rounded-xl bg-ink text-white font-bold">viral Reels</span> , Shorts, and <span class="px-3 py-1 rounded-xl bg-saga text-white font-bold">TikToks</span> — fast, engaging, and tailored to trends that perform.</h2> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"><!--[-->`);
	const each_array = ensure_array_like(stats);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let s = each_array[$$index];
		$$renderer.push(`<div class="bg-white p-7 rounded-[24px] border border-neutral-200/90 shadow-xs hover:shadow-md transition-all"><div${attr_class(`w-10 h-10 rounded-xl ${s.iconWrap} flex items-center justify-center mb-4`)}>`);
		s.icon($$renderer, { class: "w-5 h-5" });
		$$renderer.push(`<!----></div> <div class="text-4xl font-black text-ink tracking-tight mb-1">${escape_html(s.value)}</div> <p class="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">${escape_html(s.label)}</p> <p class="text-xs text-neutral-500 leading-relaxed">${escape_html(s.desc)}</p></div>`);
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/ServicesSection.svelte
function ServicesSection($$renderer) {
	const iconColor = {
		Youtube: "text-[#FF0000]",
		Instagram: "text-[#E1306C]",
		Video: "text-black",
		Film: "text-saga",
		Sparkles: "text-saga",
		Code: "text-blue-600"
	};
	$$renderer.push(`<section class="py-20 bg-canvas border-t border-neutral-200/60"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ SERVICES WE OFFER ]</div> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">Everything you need <span class="font-serif-italic text-saga font-normal">for views &amp; growth</span></h2></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
	const each_array = ensure_array_like(SERVICES);
	for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
		let service = each_array[$$index_1];
		$$renderer.push(`<div class="bg-white rounded-[24px] border border-neutral-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"><div><div${attr_class(`w-12 h-12 rounded-2xl ${service.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`)}>`);
		ServiceIcon($$renderer, {
			name: service.icon,
			class: `w-5 h-5 ${iconColor[service.icon] ?? "text-saga"}`
		});
		$$renderer.push(`<!----></div> <h3 class="text-xl font-bold text-ink tracking-tight mb-3 group-hover:text-saga transition-colors">${escape_html(service.title)}</h3> <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">${escape_html(service.description)}</p> <div class="space-y-2 pt-4 border-t border-neutral-100"><!--[-->`);
		const each_array_1 = ensure_array_like(service.features);
		for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
			let feat = each_array_1[idx];
			$$renderer.push(`<div class="flex items-center gap-2 text-xs text-neutral-700 font-medium">`);
			Circle_check_big($$renderer, { class: "w-3.5 h-3.5 text-emerald-500 shrink-0" });
			$$renderer.push(`<!----> <span>${escape_html(feat)}</span></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between"><a${attr("href", `/services#${service.slug}`)} class="text-xs font-bold text-ink group-hover:text-saga inline-flex items-center gap-1 transition-colors">Explore Service `);
		Arrow_up_right($$renderer, { class: "w-3.5 h-3.5" });
		$$renderer.push(`<!----></a> <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">48H Delivery</span></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/TalentCallout.svelte
function TalentCallout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const cards = [
			{
				icon: Dollar_sign,
				title: "Save 70-80% on salaries",
				desc: "Our global talent pool unlocks cost savings of 70% on average compared to US/EU equivalents, with zero compromise on quality."
			},
			{
				icon: Clock,
				title: "Hire within days",
				desc: "Streamline your hiring process with our pre-qualified video editors and developers available within 48 hours to 2 weeks."
			},
			{
				icon: Award,
				title: "Expertly trained",
				desc: "Every team member is rigorously vetted and trained in short-form virality, hook optimization, and modern web frameworks."
			}
		];
		$$renderer.push(`<section class="py-16 bg-canvas"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-saga text-white rounded-[32px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl"><div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div> <div class="relative z-10 max-w-4xl mx-auto text-center mb-12"><span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/20">`);
		Shield_check($$renderer, { class: "w-3.5 h-3.5" });
		$$renderer.push(`<!----> Saga Talent Placements</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Hire top-tier talent quickly without any headaches.</h2> <p class="mt-4 text-sm sm:text-base text-white/90 font-medium max-w-2xl mx-auto">Scale your video editing &amp; digital dev pipeline with dedicated, pre-vetted specialists
          matched to your brand.</p></div> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-ink mb-12"><!--[-->`);
		const each_array = ensure_array_like(cards);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let card = each_array[$$index];
			$$renderer.push(`<div class="bg-white p-7 rounded-[24px] shadow-sm flex flex-col justify-between"><div><div class="w-10 h-10 rounded-xl bg-saga/10 text-saga flex items-center justify-center mb-4">`);
			card.icon($$renderer, { class: "w-5 h-5" });
			$$renderer.push(`<!----></div> <h3 class="text-lg font-bold text-ink mb-2 leading-snug">${escape_html(card.title)}</h3> <p class="text-xs text-neutral-600 leading-relaxed">${escape_html(card.desc)}</p></div></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="relative z-10 text-center"><button class="bg-ink hover:bg-black text-white text-sm font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-xl hover:scale-[1.03] cursor-pointer">Book A Free Strategy Call `);
		Arrow_up_right($$renderer, { class: "w-4 h-4 text-saga" });
		$$renderer.push(`<!----></button></div></div></div></section>`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Saga Infographics — Creative &amp; Digital Agency</title>`);
		});
		$$renderer.push(`<meta name="description" content="Saga is a digital &amp; creative agency: viral short-form video editing, YouTube Shorts, Instagram Reels, motion graphics, and high-performance web engineering."/>`);
	});
	$$renderer.push(`<main class="min-h-screen">`);
	Hero($$renderer);
	$$renderer.push(`<!----> `);
	ProcessSection($$renderer);
	$$renderer.push(`<!----> `);
	ShortStorySection($$renderer);
	$$renderer.push(`<!----> `);
	ServicesSection($$renderer);
	$$renderer.push(`<!----> `);
	TalentCallout($$renderer);
	$$renderer.push(`<!----> `);
	PricingSection($$renderer);
	$$renderer.push(`<!----> `);
	FaqSection($$renderer);
	$$renderer.push(`<!----></main>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-voMNm05R.js.map
