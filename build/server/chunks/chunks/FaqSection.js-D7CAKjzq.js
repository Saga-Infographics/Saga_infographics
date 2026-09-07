import { an as attr_class, ah as ensure_array_like, aq as escape_html, ao as clsx$1, as as props_id, ag as attributes, ar as bind_props, ad as derived, al as spread_props } from './server.js-DkuXqxIf.js';
import { o as on } from './legacy-client.js-DAZwnwQx.js';
import { I as Icon } from './Icon.js-DjS0d1yF.js';
import { A as Arrow_up_right } from './ui.svelte.js-j8n1nWIW.js';
import { j as Calculator, d as createId, n as noop, w as watch, b as boxWith, C as Context, m as mergeProps, e as attachRef, h as boolToEmptyStrOrUndef, p as isHTMLElement, c as createBitsAttrs, H as HOME, u as isWritableSymbol, B as BoxSymbol, A as ARROW_RIGHT, v as ARROW_DOWN, x as ARROW_LEFT, y as ARROW_UP, z as boxFrom, D as boxFlatten, E as toReadonlyBox, F as isBox, G as isWritableBox, a as cn, P as PresenceManager, g as getDataOpenClosed, k as afterTick, f as getDataTransitionAttrs, I as boolToStr } from './utils2.js-CZQ9Fwo8.js';
import { S as Sparkles, C as Circle_check_big, a as PRICING_PLANS, F as FAQS } from './content.js-BFuWnKwO.js';

//#region node_modules/@lucide/svelte/dist/icons/minus.svelte
function Minus($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "minus",
		"size": 24,
		"node": [["path", { "d": "M5 12h14" }]]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/plus.svelte
function Plus($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "plus",
		"size": 24,
		"node": [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]]
	} }]));
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box.svelte.js
function box(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		}
	};
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
//#endregion
//#region node_modules/bits-ui/dist/internal/locale.js
/**
* Detects the text direction in the element.
* @returns {Direction} The text direction ('ltr' for left-to-right or 'rtl' for right-to-left).
*/
function getElemDirection(elem) {
	return window.getComputedStyle(elem).getPropertyValue("direction");
}
/**
* A utility function that returns the next key based on the direction and orientation.
*/
function getNextKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN
	}[orientation];
}
/**
* A utility function that returns the previous key based on the direction and orientation.
*/
function getPrevKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP
	}[orientation];
}
/**
* A utility function that returns the next and previous keys based on the direction
* and orientation.
*/
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
	if (!["ltr", "rtl"].includes(dir)) dir = "ltr";
	if (!["horizontal", "vertical"].includes(orientation)) orientation = "horizontal";
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation)
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/roving-focus-group.js
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(opts) {
		this.#opts = opts;
	}
	getCandidateNodes() {
		return [];
	}
	focusFirstCandidate() {
		const items = this.getCandidateNodes();
		if (!items.length) return;
		items[0]?.focus();
	}
	handleKeydown(node, e, both = false) {
		const rootNode = this.#opts.rootNode.current;
		if (!rootNode || !node) return;
		const items = this.getCandidateNodes();
		if (!items.length) return;
		const currentIndex = items.indexOf(node);
		const { nextKey, prevKey } = getDirectionalKeys(getElemDirection(rootNode), this.#opts.orientation.current);
		const loop = this.#opts.loop.current;
		const keyToIndex = {
			[nextKey]: currentIndex + 1,
			[prevKey]: currentIndex - 1,
			[HOME]: 0,
			["End"]: items.length - 1
		};
		if (both) {
			const altNextKey = nextKey === "ArrowDown" ? ARROW_RIGHT : ARROW_DOWN;
			const altPrevKey = prevKey === "ArrowUp" ? ARROW_LEFT : ARROW_UP;
			keyToIndex[altNextKey] = currentIndex + 1;
			keyToIndex[altPrevKey] = currentIndex - 1;
		}
		let itemIndex = keyToIndex[e.key];
		if (itemIndex === void 0) return;
		e.preventDefault();
		if (itemIndex < 0 && loop) itemIndex = items.length - 1;
		else if (itemIndex === items.length && loop) itemIndex = 0;
		const itemToFocus = items[itemIndex];
		if (!itemToFocus) return;
		itemToFocus.focus();
		this.#currentTabStopId.current = itemToFocus.id;
		this.#opts.onCandidateFocus?.(itemToFocus);
		return itemToFocus;
	}
	getTabIndex(node) {
		const items = this.getCandidateNodes();
		const anyActive = this.#currentTabStopId.current !== null;
		if (node && !anyActive && items[0] === node) {
			this.#currentTabStopId.current = node.id;
			return 0;
		} else if (node?.id === this.#currentTabStopId.current) return 0;
		return -1;
	}
	setCurrentTabStopId(id) {
		this.#currentTabStopId.current = id;
	}
	focusCurrentTabStop() {
		const currentTabStopId = this.#currentTabStopId.current;
		if (!currentTabStopId) return;
		const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
		if (!currentTabStop || !isHTMLElement(currentTabStop)) return;
		currentTabStop.focus();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/accordion.svelte.js
var accordionAttrs = createBitsAttrs({
	component: "accordion",
	parts: [
		"root",
		"trigger",
		"content",
		"item",
		"header"
	]
});
var AccordionRootContext = new Context("Accordion.Root");
var AccordionItemContext = new Context("Accordion.Item");
var AccordionBaseState = class {
	opts;
	rovingFocusGroup;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: accordionAttrs.trigger,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		[accordionAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionSingleState = class extends AccordionBaseState {
	opts;
	isMulti = false;
	constructor(opts) {
		super(opts);
		this.opts = opts;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.opts.value.current === item;
	}
	toggleItem(item) {
		this.opts.value.current = this.includesItem(item) ? "" : item;
	}
};
var AccordionMultiState = class extends AccordionBaseState {
	#value;
	isMulti = true;
	constructor(props) {
		super(props);
		this.#value = props.value;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.#value.current.includes(item);
	}
	toggleItem(item) {
		this.#value.current = this.includesItem(item) ? this.#value.current.filter((v) => v !== item) : [...this.#value.current, item];
	}
};
var AccordionRootState = class {
	static create(props) {
		const { type, ...rest } = props;
		const rootState = type === "single" ? new AccordionSingleState(rest) : new AccordionMultiState(rest);
		return AccordionRootContext.set(rootState);
	}
};
var AccordionItemState = class AccordionItemState {
	static create(props) {
		return AccordionItemContext.set(new AccordionItemState({
			...props,
			rootState: AccordionRootContext.get()
		}));
	}
	opts;
	root;
	#isActive = derived(() => this.root.includesItem(this.opts.value.current));
	get isActive() {
		return this.#isActive();
	}
	set isActive($$value) {
		return this.#isActive($$value);
	}
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	attachment;
	contentNode = null;
	contentPresence;
	constructor(opts) {
		this.opts = opts;
		this.root = opts.rootState;
		this.updateValue = this.updateValue.bind(this);
		this.attachment = attachRef(this.opts.ref);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: boxWith(() => this.isActive)
		});
	}
	updateValue() {
		this.root.toggleItem(this.opts.value.current);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.isActive),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		"data-orientation": this.root.opts.orientation.current,
		[accordionAttrs.item]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionTriggerState = class AccordionTriggerState {
	opts;
	itemState;
	#root;
	#isDisabled = derived(() => this.opts.disabled.current || this.itemState.opts.disabled.current || this.#root.opts.disabled.current);
	attachment;
	constructor(opts, itemState) {
		this.opts = opts;
		this.itemState = itemState;
		this.#root = itemState.root;
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionTriggerState(props, AccordionItemContext.get());
	}
	onclick(e) {
		if (this.#isDisabled() || e.button !== 0) {
			e.preventDefault();
			return;
		}
		this.itemState.updateValue();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.itemState.updateValue();
			return;
		}
		this.#root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		disabled: this.#isDisabled(),
		"aria-expanded": boolToStr(this.itemState.isActive),
		"aria-disabled": boolToStr(this.#isDisabled()),
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"data-state": getDataOpenClosed(this.itemState.isActive),
		"data-orientation": this.#root.opts.orientation.current,
		[accordionAttrs.trigger]: "",
		tabindex: this.opts.tabindex.current,
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionContentState = class AccordionContentState {
	opts;
	item;
	attachment;
	#originalStyles = void 0;
	#isMountAnimationPrevented = false;
	#dimensions = {
		width: 0,
		height: 0
	};
	#open = derived(() => {
		if (this.opts.hiddenUntilFound.current) return this.item.isActive;
		return this.opts.forceMount.current || this.item.isActive;
	});
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.#isMountAnimationPrevented = this.item.isActive;
		this.attachment = attachRef(this.opts.ref, (v) => this.item.contentNode = v);
		watch.pre([() => this.opts.ref.current, () => this.opts.hiddenUntilFound.current], ([node, hiddenUntilFound]) => {
			if (!node || !hiddenUntilFound) return;
			const handleBeforeMatch = () => {
				if (this.item.isActive) return;
				requestAnimationFrame(() => {
					this.item.updateValue();
				});
			};
			return on(node, "beforematch", handleBeforeMatch);
		});
		watch([() => this.open, () => this.opts.ref.current], this.#updateDimensions);
	}
	static create(props) {
		return new AccordionContentState(props, AccordionItemContext.get());
	}
	#updateDimensions = ([_, node]) => {
		if (!node) return;
		afterTick(() => {
			const element = this.opts.ref.current;
			if (!element) return;
			this.#originalStyles ??= {
				transitionDuration: element.style.transitionDuration,
				animationName: element.style.animationName
			};
			element.style.transitionDuration = "0s";
			element.style.animationName = "none";
			const rect = element.getBoundingClientRect();
			this.#dimensions = {
				width: rect.width,
				height: rect.height
			};
			if (!this.#isMountAnimationPrevented && this.#originalStyles) {
				element.style.transitionDuration = this.#originalStyles.transitionDuration;
				element.style.animationName = this.#originalStyles.animationName;
			}
		});
	};
	get shouldRender() {
		return this.item.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.item.isActive }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		...getDataTransitionAttrs(this.item.contentPresence.transitionStatus),
		"data-disabled": boolToEmptyStrOrUndef(this.item.isDisabled),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.content]: "",
		style: {
			"--bits-accordion-content-height": `${this.#dimensions.height}px`,
			"--bits-accordion-content-width": `${this.#dimensions.width}px`
		},
		hidden: this.opts.hiddenUntilFound.current && !this.item.isActive ? "until-found" : void 0,
		...this.opts.hiddenUntilFound.current && !this.shouldRender ? {} : { hidden: this.opts.hiddenUntilFound.current ? !this.shouldRender : this.opts.forceMount.current ? void 0 : !this.shouldRender },
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionHeaderState = class AccordionHeaderState {
	opts;
	item;
	attachment;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionHeaderState(props, AccordionItemContext.get());
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		"data-heading-level": this.opts.level.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.header]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/components/accordion.svelte
function Accordion($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, children, child, type, value = void 0, ref = null, id = createId(uid), onValueChange = noop, loop = true, orientation = "vertical", $$slots, $$events, ...restProps } = $$props;
		function handleDefaultValue() {
			if (value !== void 0) return;
			value = type === "single" ? "" : [];
		}
		handleDefaultValue();
		watch.pre(() => value, () => {
			handleDefaultValue();
		});
		const rootState = AccordionRootState.create({
			type,
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			id: boxWith(() => id),
			disabled: boxWith(() => disabled),
			loop: boxWith(() => loop),
			orientation: boxWith(() => orientation),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			value,
			ref
		});
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/components/accordion-item.svelte
function Accordion_item$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		const defaultId = createId(uid);
		let { id = defaultId, disabled = false, value = defaultId, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const itemState = AccordionItemState.create({
			value: boxWith(() => value),
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, itemState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/components/accordion-header.svelte
function Accordion_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), level = 2, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const headerState = AccordionHeaderState.create({
			id: boxWith(() => id),
			level: boxWith(() => level),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, headerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/components/accordion-trigger.svelte
function Accordion_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, ref = null, id = createId(uid), tabindex = 0, children, child, $$slots, $$events, ...restProps } = $$props;
		const triggerState = AccordionTriggerState.create({
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			tabindex: boxWith(() => tabindex ?? 0),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><button${attributes({
				type: "button",
				...mergedProps()
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/accordion/components/accordion-content.svelte
function Accordion_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, ref = null, id = createId(uid), forceMount = false, children, hiddenUntilFound = false, $$slots, $$events, ...restProps } = $$props;
		const contentState = AccordionContentState.create({
			forceMount: boxWith(() => forceMount),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			hiddenUntilFound: boxWith(() => hiddenUntilFound)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...contentState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/PricingSection.svelte
function PricingSection($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section class="py-20 bg-canvas border-t border-neutral-200/60"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-12"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ PRICING ]</div> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">Pay monthly or <span class="font-serif-italic text-saga font-normal">pay as you need</span></h2> <p class="mt-3 text-sm text-neutral-600 font-medium">No long-term lock-in. Scale up, pause, or cancel anytime.</p> <div class="mt-8 inline-flex items-center gap-3 bg-white border border-neutral-200 p-1.5 rounded-full shadow-2xs"><button${attr_class(`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer bg-ink text-white`)}>Monthly Billing</button> <button${attr_class(`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer text-neutral-600 hover:text-black`)}>Annual Billing <span class="px-2 py-0.5 text-[9px] bg-saga text-white rounded-full font-extrabold">Save 20%</span></button></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"><!--[-->`);
		const each_array = ensure_array_like(PRICING_PLANS);
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let plan = each_array[$$index_1];
			const price = plan.monthlyPrice;
			$$renderer.push(`<div${attr_class(`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${plan.popular ? "bg-ink text-white border-2 border-saga shadow-xl scale-[1.02]" : "bg-white text-ink border border-neutral-200/90 shadow-xs hover:shadow-md"}`)}>`);
			if (plan.badge) {
				$$renderer.push(`<!--[0--><div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-saga text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">`);
				Sparkles($$renderer, { class: "w-3 h-3" });
				$$renderer.push(`<!----> ${escape_html(plan.badge)}</div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div><div class="flex items-center justify-between mb-2"><h3 class="text-xl font-extrabold tracking-tight">${escape_html(plan.name)}</h3> <span${attr_class(`text-xs font-semibold px-2.5 py-1 rounded-lg ${plan.popular ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-600"}`)}>${escape_html(plan.description)}</span></div> <div class="my-6"><div class="flex items-baseline gap-1"><span class="text-4xl sm:text-5xl font-black tracking-tight">NPR ${escape_html(price.toLocaleString("en-IN"))}</span> <span${attr_class(`text-xs font-semibold ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`)}>/ month</span></div></div> <div class="space-y-3 pt-6 border-t border-neutral-200/30"><!--[-->`);
			const each_array_1 = ensure_array_like(plan.features);
			for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
				let feat = each_array_1[idx];
				$$renderer.push(`<div class="flex items-start gap-2.5 text-xs font-medium">`);
				Circle_check_big($$renderer, { class: `w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-saga" : "text-emerald-500"}` });
				$$renderer.push(`<!----> <span${attr_class(clsx$1(plan.popular ? "text-neutral-200" : "text-neutral-700"))}>${escape_html(feat)}</span></div>`);
			}
			$$renderer.push(`<!--]--></div></div> <div class="mt-8 pt-6 border-t border-neutral-200/30"><button${attr_class(`w-full text-xs sm:text-sm font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer ${plan.popular ? "bg-saga hover:bg-saga-dark text-white shadow-lg shadow-saga/30" : "bg-ink hover:bg-black text-white shadow-xs"}`)}>${escape_html(plan.ctaText)} `);
			Arrow_up_right($$renderer, { class: "w-4 h-4" });
			$$renderer.push(`<!----></button></div></div>`);
		}
		$$renderer.push(`<!--]--></div> <div class="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs"><div class="flex items-center gap-3 text-center sm:text-left"><div class="w-10 h-10 rounded-xl bg-saga/10 text-saga flex items-center justify-center shrink-0">`);
		Calculator($$renderer, { class: "w-5 h-5" });
		$$renderer.push(`<!----></div> <div><h4 class="text-sm font-bold text-ink">Need a custom volume video or dev package?</h4> <p class="text-xs text-neutral-500">Calculate exact turnaround and pricing based on your video volume.</p></div></div> <button class="bg-canvas hover:bg-neutral-100 text-ink border border-neutral-300 text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer">Open Interactive Calculator 🧮</button></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion-item.svelte
function Accordion_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_item$1) {
				$$renderer.push("<!--[-->");
				Accordion_item$1($$renderer, spread_props([
					{
						"data-slot": "accordion-item",
						class: cn(className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion-trigger.svelte
function Accordion_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_header) {
				$$renderer.push("<!--[-->");
				Accordion_header($$renderer, {
					class: "flex",
					children: ($$renderer) => {
						if (Accordion_trigger$1) {
							$$renderer.push("<!--[-->");
							Accordion_trigger$1($$renderer, spread_props([
								{
									"data-slot": "accordion-trigger",
									class: cn("flex flex-1 items-center justify-between gap-4 text-left", className)
								},
								restProps,
								{
									get ref() {
										return ref;
									},
									set ref($$value) {
										ref = $$value;
										$$settled = false;
									},
									children: ($$renderer) => {
										children?.($$renderer);
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								}
							]));
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion-content.svelte
function Accordion_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_content$1) {
				$$renderer.push("<!--[-->");
				Accordion_content$1($$renderer, spread_props([
					{
						"data-slot": "accordion-content",
						class: cn("overflow-hidden accordion-content", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							children?.($$renderer);
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/index.ts
var Root = Accordion;
//#endregion
//#region src/lib/components/FaqSection.svelte
function FaqSection($$renderer) {
	let value = "f1";
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		$$renderer.push(`<section class="py-20 bg-canvas border-t border-neutral-200/60"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><div class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4">[ FREQUENTLY ASKED QUESTION ]</div> <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">Everything You <span class="font-serif-italic text-saga font-normal">Need to Know</span></h2></div> `);
		if (Root) {
			$$renderer.push("<!--[-->");
			Root($$renderer, {
				type: "single",
				class: "space-y-4",
				get value() {
					return value;
				},
				set value($$value) {
					value = $$value;
					$$settled = false;
				},
				children: ($$renderer) => {
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(FAQS);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let faq = each_array[$$index];
						const isOpen = value === faq.id;
						if (Accordion_item) {
							$$renderer.push("<!--[-->");
							Accordion_item($$renderer, {
								value: faq.id,
								class: `rounded-2xl border transition-all duration-300 ${isOpen ? "bg-white border-saga/40 shadow-sm" : "bg-white/80 hover:bg-white border-neutral-200/80"}`,
								children: ($$renderer) => {
									if (Accordion_trigger) {
										$$renderer.push("<!--[-->");
										Accordion_trigger($$renderer, {
											class: "w-full p-5 sm:p-6 cursor-pointer",
											children: ($$renderer) => {
												$$renderer.push(`<span class="text-base sm:text-lg font-bold text-ink leading-snug">${escape_html(faq.question)}</span> <div${attr_class(`p-1.5 rounded-full transition-colors shrink-0 ${isOpen ? "bg-saga text-white" : "bg-neutral-100 text-neutral-700"}`)}>`);
												if (isOpen) {
													$$renderer.push("<!--[0-->");
													Minus($$renderer, { class: "w-4 h-4" });
												} else {
													$$renderer.push("<!--[-1-->");
													Plus($$renderer, { class: "w-4 h-4" });
												}
												$$renderer.push(`<!--]--></div>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Accordion_content) {
										$$renderer.push("<!--[-->");
										Accordion_content($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<div class="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">${escape_html(faq.answer)}</div>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(`</div></section>`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}

export { FaqSection as F, PricingSection as P };
//# sourceMappingURL=FaqSection.js-D7CAKjzq.js.map
