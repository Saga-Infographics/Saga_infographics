import { aq as escape_html } from '../../chunks/server.js-DkuXqxIf.js';
import { p as page } from '../../chunks/state.js-C_h47EJ7.js';
import 'clsx';
import '../../chunks/shared.js-CcLTIra1.js';
import '../../chunks/index-server.js-7PpEqI4r.js';
import '../../chunks/internal2.js-BprCE4HO.js';
import '../../chunks/legacy-client.js-DAZwnwQx.js';
import '../../chunks/exports.js-DcJBmnQK.js';
import '../../chunks/utils.js-DMmlGwIW.js';

//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}

export { Error as default };
//# sourceMappingURL=error.svelte.js-B0CEU61k.js.map
