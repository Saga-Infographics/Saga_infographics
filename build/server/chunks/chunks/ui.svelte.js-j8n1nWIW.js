import { al as spread_props } from './server.js-DkuXqxIf.js';
import { I as Icon } from './Icon.js-DjS0d1yF.js';

//#region node_modules/@lucide/svelte/dist/icons/arrow-up-right.svelte
function Arrow_up_right($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "arrow-up-right",
		"size": 24,
		"node": [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]]
	} }]));
}
//#endregion
//#region src/lib/stores/ui.svelte.ts
var UIState = class {
	bookingOpen = false;
	calculatorOpen = false;
	showreelOpen = false;
	selectedWork = null;
	openBooking = () => {
		this.calculatorOpen = false;
		this.selectedWork = null;
		this.bookingOpen = true;
	};
	closeBooking = () => {
		this.bookingOpen = false;
	};
	openCalculator = () => {
		this.calculatorOpen = true;
	};
	closeCalculator = () => {
		this.calculatorOpen = false;
	};
	openShowreel = () => {
		this.showreelOpen = true;
	};
	closeShowreel = () => {
		this.showreelOpen = false;
	};
	selectWork = (work) => {
		this.selectedWork = work;
	};
	clearWork = () => {
		this.selectedWork = null;
	};
};
var ui = new UIState();

export { Arrow_up_right as A, ui as u };
//# sourceMappingURL=ui.svelte.js-j8n1nWIW.js.map
