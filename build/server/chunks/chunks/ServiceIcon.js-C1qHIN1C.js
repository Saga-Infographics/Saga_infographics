import { al as spread_props } from './server.js-DkuXqxIf.js';
import { I as Icon } from './Icon.js-DjS0d1yF.js';
import { S as Sparkles } from './content.js-BFuWnKwO.js';
import { B as BrandIcon, C as Code, Z as Zap } from './BrandIcon.js-B-tjI23l.js';

//#region node_modules/@lucide/svelte/dist/icons/film.svelte
function Film($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "film",
		"size": 24,
		"node": [
			["rect", {
				"width": "18",
				"height": "18",
				"x": "3",
				"y": "3",
				"rx": "2"
			}],
			["path", { "d": "M7 3v18" }],
			["path", { "d": "M3 7.5h4" }],
			["path", { "d": "M3 12h18" }],
			["path", { "d": "M3 16.5h4" }],
			["path", { "d": "M17 3v18" }],
			["path", { "d": "M17 7.5h4" }],
			["path", { "d": "M17 16.5h4" }]
		]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/video.svelte
function Video($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "video",
		"size": 24,
		"node": [["path", { "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", {
			"x": "2",
			"y": "6",
			"width": "14",
			"height": "12",
			"rx": "2"
		}]]
	} }]));
}
//#endregion
//#region src/lib/components/ServiceIcon.svelte
function ServiceIcon($$renderer, $$props) {
	let { name, class: className = "w-5 h-5" } = $$props;
	if (name === "Youtube") {
		$$renderer.push("<!--[0-->");
		BrandIcon($$renderer, {
			name: "youtube",
			class: className
		});
	} else if (name === "Instagram") {
		$$renderer.push("<!--[1-->");
		BrandIcon($$renderer, {
			name: "instagram",
			class: className
		});
	} else if (name === "Video") {
		$$renderer.push("<!--[2-->");
		Video($$renderer, { class: className });
	} else if (name === "Film") {
		$$renderer.push("<!--[3-->");
		Film($$renderer, { class: className });
	} else if (name === "Sparkles") {
		$$renderer.push("<!--[4-->");
		Sparkles($$renderer, { class: className });
	} else if (name === "Code") {
		$$renderer.push("<!--[5-->");
		Code($$renderer, { class: className });
	} else {
		$$renderer.push("<!--[-1-->");
		Zap($$renderer, { class: className });
	}
	$$renderer.push(`<!--]-->`);
}

export { ServiceIcon as S, Video as V };
//# sourceMappingURL=ServiceIcon.js-C1qHIN1C.js.map
