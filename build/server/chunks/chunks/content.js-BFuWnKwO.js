import { al as spread_props } from './server.js-DkuXqxIf.js';
import { I as Icon } from './Icon.js-DjS0d1yF.js';

//#region node_modules/@lucide/svelte/dist/icons/circle-check-big.svelte
function Circle_check_big($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "circle-check-big",
		"size": 24,
		"node": [["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { "d": "m9 11 3 3L22 4" }]],
		"aliases": ["check-circle"]
	} }]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/sparkles.svelte
function Sparkles($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: {
		"name": "sparkles",
		"size": 24,
		"node": [
			["path", { "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }],
			["path", { "d": "M20 2v4" }],
			["path", { "d": "M22 4h-4" }],
			["circle", {
				"cx": "4",
				"cy": "20",
				"r": "2"
			}]
		],
		"aliases": ["stars"]
	} }]));
}
//#endregion
//#region src/lib/data/content.ts
var PRODUCTS = [{
	name: "SMM Panel",
	description: "Social media marketing & growth panel",
	url: "https://smm.saga.com.np"
}, {
	name: "FMS",
	description: "File / financial management system",
	url: "https://fms.saga.com.np"
}];
var PROCESS_STEPS = [
	{
		number: "01",
		title: "Give us your raw footage, it can be DSLR or iPhone",
		description: "We maintain a bench of pre-vetted video editors and creators ready to be trained and assigned to your account within 48 hours.",
		imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
		alt: "Recording raw footage on phone"
	},
	{
		number: "02",
		title: "Our team instantly starts editing your videos & assets",
		description: "No delays, no guesswork—our team of video editors & motion designers is vetted, trained, and ready to transform your brand content.",
		imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
		alt: "Editing video in studio workspace"
	},
	{
		number: "03",
		title: "Upload & start seeing results from day one",
		description: "Streamline your content engine with pre-qualified editors, tailored hook optimization, and fast turnaround to trigger viral growth.",
		imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
		alt: "Reviewing analytics on laptop"
	}
];
var SERVICES = [
	{
		id: "s1",
		title: "Youtube Shorts",
		description: "Turn long podcasts or horizontal videos into high-retention vertical Shorts with animated captions & sound hooks.",
		icon: "Youtube",
		badgeBg: "bg-[#FF0000]/10",
		badgeTextColor: "text-[#FF0000]",
		features: [
			"Custom Animated Captions",
			"Hook Optimization",
			"Sound Effects & B-Roll",
			"48h Delivery"
		],
		slug: "youtube-shorts"
	},
	{
		id: "s2",
		title: "Instagram Reels",
		description: "Trendy, aesthetic, and fast-paced edits crafted specifically to trigger Instagram algorithm recommendations.",
		icon: "Instagram",
		badgeBg: "bg-[#E1306C]/10",
		badgeTextColor: "text-[#E1306C]",
		features: [
			"Trending Music Overlay",
			"Color Grading",
			"Native Text Styling",
			"Hashtag Strategy"
		],
		slug: "instagram-reels"
	},
	{
		id: "s3",
		title: "TikTok Videos",
		description: "Raw, native-feeling, high-energy edits that keep viewers watching past 3 seconds.",
		icon: "Video",
		badgeBg: "bg-[#000000]/10",
		badgeTextColor: "text-[#121212]",
		features: [
			"Pattern Interrupts",
			"Fast Cuts & Zoom Effects",
			"Trending Sounds",
			"CTA Overlays"
		],
		slug: "tiktok-videos"
	},
	{
		id: "s4",
		title: "Video Edits & Content Creation",
		description: "End-to-end video post-production for brands, agencies, course creators, and founder channels.",
		icon: "Film",
		badgeBg: "bg-[#FF4D23]/10",
		badgeTextColor: "text-[#FF4D23]",
		features: [
			"Full Video Editing",
			"Storyboarding",
			"Sound Design & Mixing",
			"Dedicated Editor"
		],
		slug: "video-edits"
	},
	{
		id: "s5",
		title: "Motion Graphics & Animation Design",
		description: "Sleek 2D/3D motion graphics, kinetic typography, lower thirds, and logo animations.",
		icon: "Sparkles",
		badgeBg: "bg-[#FF4D23]/10",
		badgeTextColor: "text-[#FF4D23]",
		features: [
			"Logo Animation",
			"Custom UI Mockups",
			"Infographic Motion",
			"After Effects Masters"
		],
		slug: "motion-graphics"
	},
	{
		id: "s6",
		title: "Web Engineering & Digital Products",
		description: "High-performance React & Next.js websites built with ultra-responsive layouts, smooth motion, and instant speed.",
		icon: "Code",
		badgeBg: "bg-[#2563EB]/10",
		badgeTextColor: "text-[#2563EB]",
		features: [
			"React & Tailwind CSS",
			"SEO & Speed Optimized",
			"CMS Integration",
			"Responsive Design"
		],
		slug: "web-development"
	}
];
var PRICING_PLANS = [
	{
		id: "p1",
		name: "Clipstart",
		description: "1 short video/week",
		monthlyPrice: 7999,
		yearlyPrice: 6399,
		ctaText: "Get Started Now",
		features: [
			"4 edited videos per month",
			"For creators just getting started",
			"Fast 48-72 hour turnaround",
			"Captions + basic hook optimization",
			"Stock footage & audio background",
			"1 revision round per video"
		]
	},
	{
		id: "p2",
		name: "ReelFlow",
		description: "2-3 short videos/week",
		monthlyPrice: 19999,
		yearlyPrice: 15999,
		popular: true,
		badge: "MOST POPULAR",
		ctaText: "Get Started Now",
		features: [
			"10-12 edited videos per month",
			"Includes trending hooks and sound",
			"Advanced motion/text animations",
			"Custom brand styling + assets",
			"Priority delivery + 2 revisions/video",
			"Dedicated Account Manager"
		]
	},
	{
		id: "p3",
		name: "ViralBoost",
		description: "Fully custom, high-volume editing",
		monthlyPrice: 44999,
		yearlyPrice: 35999,
		ctaText: "Book A Meeting",
		features: [
			"Unlimited short video edits / custom scope",
			"Strategy calls + creative direction",
			"Thumbnail design for YouTube Shorts",
			"Priority Slack/Notion communication",
			"Custom motion graphic templates",
			"Full source file delivery"
		]
	}
];
var FAQS = [
	{
		id: "f1",
		category: "General",
		question: "How quickly can we start after booking a call?",
		answer: "Once you book a meeting and choose your tier, our onboarding takes less than 24 hours. You get direct access to your dedicated Slack channel and Notion portal to upload raw footage or submit project requirements immediately."
	},
	{
		id: "f2",
		category: "Workflow",
		question: "What kind of raw materials or files do I need to provide?",
		answer: "You can upload raw camera video (DSLR or smartphone), Zoom/podcast recordings, screen recordings, or audio files via Google Drive, Dropbox, or Frame.io. We take care of transcriptions, hooks, graphics, b-roll, and final styling."
	},
	{
		id: "f3",
		category: "Revisions",
		question: "What if I need revisions on a video or web project?",
		answer: "Every video comes with dedicated revision rounds. You can leave precise timestamped comments directly on Frame.io or Notion, and our editors apply the changes within 24 hours."
	},
	{
		id: "f4",
		category: "Aesthetic",
		question: "How do you match editors and designers with our brand aesthetic?",
		answer: "Before we start editing, we build a customized Brand Guide for you containing your brand fonts, color palettes, caption styles, preferred music genres, and visual inspiration clips."
	},
	{
		id: "f5",
		category: "Billing",
		question: "Can we pause or cancel our subscription at any time?",
		answer: "Yes! All plans operate on a simple month-to-month basis with no long-term contracts. You can scale up during launch months, pause when you are on vacation, or cancel anytime."
	}
];
var MEGA_MENU_ITEMS = [
	{
		title: "Short-Form Video Editing",
		description: "TikTok, Reels, and Shorts edited to hook viewers & go viral",
		path: "/services#youtube-shorts",
		badge: "Popular",
		iconName: "Play"
	},
	{
		title: "Web Engineering",
		description: "Modern React & Tailwind sites designed for high conversion",
		path: "/services#web-development",
		iconName: "Code"
	},
	{
		title: "UI/UX & Product Design",
		description: "Sleek app interfaces and visual design systems",
		path: "/services#ui-ux",
		iconName: "Layout"
	},
	{
		title: "Motion & 3D Graphics",
		description: "Kinetic typography, animated logos, and lower thirds",
		path: "/services#motion-graphics",
		iconName: "Sparkles"
	},
	{
		title: "Pricing & Plans",
		description: "Transparent monthly plans or custom project scope",
		path: "/pricing",
		iconName: "Tag"
	}
];

export { Circle_check_big as C, FAQS as F, MEGA_MENU_ITEMS as M, PRODUCTS as P, Sparkles as S, PRICING_PLANS as a, PROCESS_STEPS as b, SERVICES as c };
//# sourceMappingURL=content.js-BFuWnKwO.js.map
