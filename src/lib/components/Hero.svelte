<script lang="ts">
  // import { onMount } from 'svelte';
  import { ArrowUpRight, Flame, ShieldCheck, Zap } from '@lucide/svelte';
  import BrandIcon from '$lib/components/BrandIcon.svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let heroRef: HTMLElement;

  // Hero media showcase / video player is commented out for now, so the
  // GSAP scroll-scale effect that animated it is disabled too.
  //
  // let videoWrapperRef: HTMLElement;
  //
  // onMount(() => {
  //   let ctx: { revert: () => void } | undefined;
  //
  //   (async () => {
  //     const gsapMod = await import('gsap');
  //     const stMod = await import('gsap/ScrollTrigger');
  //     const gsap = gsapMod.default ?? gsapMod.gsap;
  //     const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
  //     gsap.registerPlugin(ScrollTrigger);
  //
  //     ctx = gsap.context(() => {
  //       if (videoWrapperRef && heroRef) {
  //         gsap.fromTo(
  //           videoWrapperRef,
  //           { scale: 0.82, transformOrigin: 'center center' },
  //           {
  //             scale: 1,
  //             ease: 'power1.out',
  //             scrollTrigger: {
  //               trigger: heroRef,
  //               start: 'top top+=60',
  //               end: 'bottom center+=100',
  //               scrub: 1.2
  //             }
  //           }
  //         );
  //       }
  //     }, heroRef);
  //   })();
  //
  //   return () => ctx?.revert();
  // });
</script>

<section
  bind:this={heroRef}
  class="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-canvas"
>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <!-- Rating Pill / TrustPilot — hidden for now
    <div
      class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 text-[12px] font-semibold text-neutral-800 shadow-2xs mb-6 hover:border-neutral-300 transition-colors"
    >
      <div class="flex items-center text-emerald-500">
        <Star class="w-3.5 h-3.5 fill-emerald-500" />
      </div>
      <span><strong class="font-bold text-neutral-900">4.9/5</strong> Reviews on TrustPilot</span>
    </div>
    -->

    <div class="relative max-w-5xl mx-auto py-2">
      <!-- Orbit Ring -->
      <div
        class="hidden sm:block absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] pointer-events-none -z-10 opacity-90"
      >
        <div
          class="w-full h-full rounded-full border border-dashed border-neutral-300/60 animate-orbit-ring relative"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
            <div class="animate-orbit-counter">
              <div
                class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform"
              >
                <Flame class="w-full h-full text-saga" />
              </div>
            </div>
          </div>

          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
            <div class="animate-orbit-counter">
              <div
                class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform"
              >
                <ShieldCheck class="w-full h-full text-blue-600" />
              </div>
            </div>
          </div>

          <div class="absolute top-1/2 -right-4 -translate-y-1/2 pointer-events-auto">
            <div class="animate-orbit-counter">
              <div
                class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform"
              >
                <BrandIcon name="youtube" class="w-full h-full text-[#FF0000]" />
              </div>
            </div>
          </div>

          <div class="absolute top-1/2 -left-4 -translate-y-1/2 pointer-events-auto">
            <div class="animate-orbit-counter">
              <div
                class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform"
              >
                <Zap class="w-full h-full text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Foreground Hero Content -->
      <div class="relative z-20">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Agency that makes your{' '}
          <span class="inline-flex items-center gap-1.5 md:gap-2">
            <span class="font-serif-italic text-saga font-normal">videos & reels</span>
            <span
              class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-saga text-white p-2 shadow-md shadow-saga/30 shrink-0 align-middle"
            >
              <BrandIcon name="instagram" class="w-full h-full" />
            </span>
            <span class="font-serif-italic text-saga font-normal">viral</span>
          </span>
        </h1>

        <p
          class="mt-5 text-base sm:text-lg md:text-xl text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Short-form video editing, web engineering & digital production for Influencers, Creators
          and Brands.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-20">
          <button
            onclick={ui.openBooking}
            class="bg-ink hover:bg-black text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Book A Free Meeting
            <ArrowUpRight class="w-4 h-4 text-saga" />
          </button>

          <!-- Work page hidden for now
          <a
            href="/work"
            class="bg-white/90 hover:bg-white text-ink border border-neutral-300 hover:border-neutral-400 text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            View Our Works
          </a>
          -->
        </div>
      </div>
    </div>

    <!-- Hero Media Showcase / video player — hidden for now
    <div
      bind:this={videoWrapperRef}
      class="mt-12 sm:mt-16 relative max-w-5xl mx-auto group will-change-transform"
    >
      <div
        class="relative rounded-[24px] sm:rounded-[36px] overflow-hidden border border-neutral-300/80 shadow-2xl bg-neutral-900 aspect-[16/9] sm:aspect-[16/8.5]"
      >
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="Saga Agency Laptop Workstation"
          class="w-full h-full object-cover object-center opacity-95 group-hover:scale-[1.01] transition-transform duration-700"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
        ></div>

        <button
          onclick={ui.openShowreel}
          class="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group-hover:bg-saga group-hover:text-white cursor-pointer"
          aria-label="Play showreel video"
        >
          <Play class="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
        </button>

        <div
          class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white text-xs sm:text-sm font-medium"
        >
          <span
            class="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2"
          >
            <Sparkles class="w-3.5 h-3.5 text-saga" />
            Saga Agency Showreel 2026
          </span>

          <span
            class="hidden sm:inline-block bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10"
          >
            100M+ Views Driven
          </span>
        </div>
      </div>
    </div>
    -->
  </div>
</section>
