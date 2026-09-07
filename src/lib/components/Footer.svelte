<script lang="ts">
    import { ArrowUpRight, Mail, MapPin, Phone } from "@lucide/svelte";
    import BrandIcon from "$lib/components/BrandIcon.svelte";
    import { PRODUCTS } from "$lib/data/content";
    import { ui } from "$lib/stores/ui.svelte";

    const year = new Date().getFullYear();

    const social = [
        {
            href: "https://www.facebook.com/profile.php?id=100089148218291",
            name: "facebook",
            label: "Facebook",
        },
        {
            href: "https://www.instagram.com/sagainfographics/",
            name: "instagram",
            label: "Instagram",
        },
        {
            href: "https://www.tiktok.com/@sagainfographics",
            name: "tiktok",
            label: "TikTok",
        },
        // { href: "https://youtube.com", name: "youtube", label: "YouTube" },
        // { href: "https://twitter.com", name: "twitter", label: "Twitter" },
        {
            href: "https://www.linkedin.com/company/saga-infographic",
            name: "linkedin",
            label: "LinkedIn",
        },
    ] as const;
</script>

<footer
    class="bg-ink text-white pt-16 pb-12 rounded-t-[32px] sm:rounded-t-[40px] border-t border-neutral-800"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Top CTA -->
        <div
            class="bg-saga rounded-[28px] p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl"
        >
            <div>
                <h3
                    class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
                >
                    Ready to make your content go viral?
                </h3>
                <p class="mt-2 text-xs sm:text-sm text-white/90 font-medium">
                    Book a 15-minute intro strategy call with our creative
                    directors today.
                </p>
            </div>

            <button
                onclick={ui.openBooking}
                class="bg-white hover:bg-neutral-100 text-ink font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-lg hover:scale-105 shrink-0 cursor-pointer"
            >
                Book Free Meeting
                <ArrowUpRight class="w-4 h-4 text-saga" />
            </button>
        </div>

        <!-- Nav Columns -->
        <div
            class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800"
        >
            <div class="md:col-span-4 space-y-4">
                <a href="/" class="flex items-center gap-2.5 group">
                    <img
                        src="/logo.png"
                        alt="Saga Infographics"
                        width="40"
                        height="40"
                        class="w-10 h-10 shrink-0 transition-transform group-hover:scale-105"
                    />
                    <span
                        class="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5"
                    >
                        Saga Infographics <span
                            class="w-1.5 h-1.5 rounded-full bg-saga"
                        ></span>
                    </span>
                </a>

                <p class="text-xs text-neutral-400 leading-relaxed max-w-sm">
                    Saga Infographics — Digital & Creative Agency in Nepal.
                    Specializing in high-retention short-form video editing,
                    viral Reels, YouTube Shorts, and high-performance Web
                    Engineering.
                </p>

                <div class="flex items-center gap-3 pt-2">
                    {#each social as s (s.href)}
                        <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            class="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-saga transition-colors"
                        >
                            <BrandIcon name={s.name} class="w-4 h-4" />
                        </a>
                    {/each}
                </div>
            </div>

            <div class="md:col-span-2 space-y-3">
                <h4
                    class="text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                    Navigation
                </h4>
                <ul class="space-y-2 text-xs font-medium text-neutral-400">
                    <li>
                        <a href="/" class="hover:text-white transition-colors"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="/about"
                            class="hover:text-white transition-colors"
                            >About Saga</a
                        >
                    </li>
                    <!-- <li>
                        <a
                            href="/work"
                            class="hover:text-white transition-colors"
                            >Recent Works</a
                        >
                    </li> -->
                    <li>
                        <a
                            href="/services"
                            class="hover:text-white transition-colors"
                            >All Services</a
                        >
                    </li>
                    <li>
                        <a
                            href="/pricing"
                            class="hover:text-white transition-colors"
                            >Pricing & Plans</a
                        >
                    </li>
                </ul>

                <h4
                    class="text-xs font-bold uppercase tracking-wider text-neutral-300 pt-2"
                >
                    Products
                </h4>
                <ul class="space-y-2 text-xs font-medium text-neutral-400">
                    {#each PRODUCTS as product (product.url)}
                        <li>
                            <a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="hover:text-white transition-colors"
                                >{product.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="md:col-span-3 space-y-3">
                <h4
                    class="text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                    Services
                </h4>
                <ul class="space-y-2 text-xs font-medium text-neutral-400">
                    <li>
                        <a
                            href="/services#youtube-shorts"
                            class="hover:text-white transition-colors"
                        >
                            YouTube Shorts Editing
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services#instagram-reels"
                            class="hover:text-white transition-colors"
                        >
                            Instagram Reels Virality
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services#tiktok-videos"
                            class="hover:text-white transition-colors"
                        >
                            TikTok Video Production
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services#motion-graphics"
                            class="hover:text-white transition-colors"
                        >
                            2D/3D Motion Graphics
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services#web-development"
                            class="hover:text-white transition-colors"
                        >
                            React & Next.js Development
                        </a>
                    </li>
                </ul>
            </div>

            <div class="md:col-span-3 space-y-3">
                <h4
                    class="text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                    Saga HQ
                </h4>
                <div class="space-y-2 text-xs text-neutral-400 leading-relaxed">
                    <p class="flex items-start gap-2">
                        <MapPin class="w-4 h-4 text-saga shrink-0 mt-0.5" />
                        Kathmandu, Nepal (saga.com.np)
                    </p>
                    <p class="flex items-center gap-2">
                        <Mail class="w-4 h-4 text-saga shrink-0" />
                        info@saga.com.np
                    </p>
                    <p class="flex items-center gap-2">
                        <Phone class="w-4 h-4 text-saga shrink-0" />
                        +977 980-5677536
                    </p>
                </div>
            </div>
        </div>

        <!-- Bottom -->
        <div
            class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4"
        >
            <p>
                © {year} Saga Infographics — Creative & Digital Agency
                (saga.com.np). All Rights Reserved.
            </p>
            <div class="flex items-center gap-6">
                <a
                    href="/privacy-policy"
                    class="hover:text-neutral-300 transition-colors"
                    >Privacy Policy</a
                >
                <a
                    href="/terms"
                    class="hover:text-neutral-300 transition-colors"
                    >Terms & Conditions</a
                >
            </div>
        </div>
    </div>
</footer>
