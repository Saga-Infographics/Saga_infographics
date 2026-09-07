import { at as head, ap as attr, an as attr_class, ao as clsx$1, aq as escape_html } from '../../../chunks/server.js-DkuXqxIf.js';
import { C as Clock } from '../../../chunks/clock.js-DjIYv8A3.js';
import { M as Map_pin, a as Mail, P as Phone, S as Send } from '../../../chunks/send.js-Drhq3Ylh.js';
import 'clsx';
import '../../../chunks/shared.js-CcLTIra1.js';
import '../../../chunks/Icon.js-DjS0d1yF.js';

//#region src/routes/contact/+page.svelte
function _page($$renderer) {
	let formData = {
		name: "",
		email: "",
		phone: "",
		subject: "Video Editing Enquiry",
		message: ""
	};
	const inputClass = "w-full bg-canvas border border-neutral-200/90 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-saga";
	head("1bv7ezn", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Contact — Saga Infographics</title>`);
		});
		$$renderer.push(`<meta name="description" content="Questions about Saga's editing workflows or custom web development packages? Our team responds within 2 hours."/>`);
	});
	$$renderer.push(`<div class="py-12 bg-canvas min-h-screen"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ CONTACT SAGA ]</div> <h1 class="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">Let's build something <span class="font-serif-italic text-saga font-normal">viral together</span></h1> <p class="mt-4 text-base text-neutral-600 leading-relaxed">Have questions about our editing workflows or custom web development packages? Our team
        responds within 2 hours.</p></div> <div class="grid grid-cols-1 md:grid-cols-12 gap-10"><div class="md:col-span-5 space-y-6"><div class="bg-white rounded-[28px] p-8 border border-neutral-200/90 shadow-xs space-y-6"><h2 class="text-xl font-extrabold text-ink tracking-tight">Saga HQ &amp; Contact Info</h2> <div class="space-y-4 text-xs sm:text-sm text-neutral-700"><div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-saga/10 text-saga flex items-center justify-center shrink-0">`);
	Map_pin($$renderer, { class: "w-5 h-5" });
	$$renderer.push(`<!----></div> <div><h3 class="font-bold text-ink">Kathmandu Studio</h3> <p class="text-neutral-500 text-xs">Kathmandu 44600, Nepal (saga.com.np)</p></div></div> <div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">`);
	Mail($$renderer, { class: "w-5 h-5" });
	$$renderer.push(`<!----></div> <div><h3 class="font-bold text-ink">Email Inquiry</h3> <p class="text-neutral-500 text-xs">info@saga.com.np</p></div></div> <div class="flex items-start gap-3"><div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">`);
	Phone($$renderer, { class: "w-5 h-5" });
	$$renderer.push(`<!----></div> <div><h3 class="font-bold text-ink">Phone &amp; WhatsApp</h3> <p class="text-neutral-500 text-xs">+977 (01) 400-SAGA</p></div></div></div> <div class="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">`);
	Clock($$renderer, { class: "w-4 h-4 text-saga" });
	$$renderer.push(`<!----> Average Response Time: <strong class="text-black">&lt; 2 Hours</strong></div></div> <div class="bg-ink text-white rounded-[28px] p-6 border border-neutral-800 shadow-md flex items-center justify-between"><div><h4 class="text-sm font-bold">Serving Global Clients</h4> <p class="text-xs text-neutral-400">US, EU, Asia &amp; Australia Timezones</p></div> <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span></div></div> <div class="md:col-span-7"><div class="bg-white rounded-[28px] p-8 sm:p-10 border border-neutral-200/90 shadow-xs">`);
	{
		$$renderer.push(`<!--[-1--><form class="space-y-4"><h2 class="text-2xl font-extrabold text-ink tracking-tight mb-2">Send Us A Direct Project Message</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label for="c-name" class="block text-xs font-bold text-neutral-800 mb-1">Name *</label> <input id="c-name" type="text" required="" placeholder="Your full name"${attr("value", formData.name)}${attr_class(clsx$1(inputClass))}/></div> <div><label for="c-email" class="block text-xs font-bold text-neutral-800 mb-1">Email *</label> <input id="c-email" type="email" required="" placeholder="you@company.com"${attr("value", formData.email)}${attr_class(clsx$1(inputClass))}/></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label for="c-phone" class="block text-xs font-bold text-neutral-800 mb-1">Phone / WhatsApp</label> <input id="c-phone" type="text" placeholder="+1 (555) 000-0000"${attr("value", formData.phone)}${attr_class(clsx$1(inputClass))}/></div> <div><label for="c-subject" class="block text-xs font-bold text-neutral-800 mb-1">Inquiry Topic</label> `);
		$$renderer.select({
			id: "c-subject",
			value: formData.subject,
			class: inputClass
		}, ($$renderer) => {
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`Video Editing Enquiry`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`Web Engineering &amp; App Dev`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`Hire Dedicated Editor/Dev`);
			});
			$$renderer.option({}, ($$renderer) => {
				$$renderer.push(`General Partnership`);
			});
		});
		$$renderer.push(`</div></div> <div><label for="c-message" class="block text-xs font-bold text-neutral-800 mb-1">Project Brief / Message *</label> <textarea id="c-message"${attr("rows", 4)} required="" placeholder="Describe your raw video volume, channel, target goals..."${attr_class(clsx$1(inputClass))}>`);
		const $$body = escape_html(formData.message);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea></div> <button type="submit" class="w-full bg-saga hover:bg-saga-dark text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer">Send Direct Message `);
		Send($$renderer, { class: "w-4 h-4" });
		$$renderer.push(`<!----></button></form>`);
	}
	$$renderer.push(`<!--]--></div></div></div></div></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-C5j6Pqvq.js.map
