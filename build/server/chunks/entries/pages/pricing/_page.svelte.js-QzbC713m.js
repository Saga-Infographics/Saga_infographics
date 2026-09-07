import { at as head } from '../../../chunks/server.js-DkuXqxIf.js';
import { P as PricingSection, F as FaqSection } from '../../../chunks/FaqSection.js-D7CAKjzq.js';
import 'clsx';
import '../../../chunks/shared.js-CcLTIra1.js';
import '../../../chunks/legacy-client.js-DAZwnwQx.js';
import '../../../chunks/Icon.js-DjS0d1yF.js';
import '../../../chunks/ui.svelte.js-j8n1nWIW.js';
import '../../../chunks/utils2.js-CZQ9Fwo8.js';
import '../../../chunks/index-server.js-7PpEqI4r.js';
import 'tailwind-merge';
import '../../../chunks/content.js-BFuWnKwO.js';

//#region src/routes/pricing/+page.svelte
function _page($$renderer) {
	head("1hrotn9", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Pricing &amp; Plans — Saga Infographics</title>`);
		});
		$$renderer.push(`<meta name="description" content="Transparent monthly Saga plans or custom project scope. No long-term lock-in — scale up, pause, or cancel anytime."/>`);
	});
	$$renderer.push(`<div class="bg-canvas min-h-screen">`);
	PricingSection($$renderer);
	$$renderer.push(`<!----> `);
	FaqSection($$renderer);
	$$renderer.push(`<!----></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-QzbC713m.js.map
