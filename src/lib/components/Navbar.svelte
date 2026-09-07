<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { ChevronDown, ArrowUpRight, ExternalLink, Menu, X } from '@lucide/svelte';
  import MegaMenu from './MegaMenu.svelte';
  import { PRODUCTS } from '$lib/data/content';
  import { ui } from '$lib/stores/ui.svelte';

  let megaOpen = $state(false);
  let productsOpen = $state(false);
  let mobileOpen = $state(false);
  let scrolled = $state(false);
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  let productsTimer: ReturnType<typeof setTimeout> | undefined;

  const pathname = $derived(page.url.pathname);

  function openMega() {
    clearTimeout(closeTimer);
    megaOpen = true;
  }
  function scheduleCloseMega() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => (megaOpen = false), 140);
  }
  function closeMega() {
    clearTimeout(closeTimer);
    megaOpen = false;
  }

  function openProducts() {
    clearTimeout(productsTimer);
    productsOpen = true;
  }
  function scheduleCloseProducts() {
    clearTimeout(productsTimer);
    productsTimer = setTimeout(() => (productsOpen = false), 140);
  }
  function closeProducts() {
    clearTimeout(productsTimer);
    productsOpen = false;
  }

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        megaOpen = false;
        productsOpen = false;
        mobileOpen = false;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      clearTimeout(closeTimer);
      clearTimeout(productsTimer);
    };
  });

  afterNavigate(() => {
    closeMega();
    closeProducts();
    mobileOpen = false;
  });

  const navLinks = [
    { href: '/about', label: 'About' },
    // { href: '/work', label: 'Work' },
    { href: '/services', label: 'Service' },
    { href: '/pricing', label: 'Pricing' }
  ];

  const mobileLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    // { href: '/work', label: 'Our Works & Case Studies' },
    { href: '/services', label: 'Services & Editing' },
    { href: '/pricing', label: 'Pricing & Plans' },
    { href: '/contact', label: 'Contact Agency' }
  ];
</script>

<header
  class={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-canvas/90 backdrop-blur-md border-b border-neutral-200/80 py-2.5 shadow-xs'
      : 'bg-canvas py-3 md:py-4 border-b border-neutral-200/40'
  }`}
>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/" class="flex items-center gap-2 group shrink-0">
      <img
        src="/logo.png"
        alt="Saga Infographics"
        width="36"
        height="36"
        class="w-9 h-9 shrink-0 transition-transform group-hover:scale-105"
      />
      <div class="flex flex-col">
        <span
          class="text-base sm:text-lg font-extrabold tracking-tight text-ink flex items-center gap-1.5 leading-none"
        >
          Saga Infographics <span class="w-1.5 h-1.5 rounded-full bg-saga"></span>
        </span>
        <span
          class="text-[9px] font-semibold uppercase tracking-widest text-neutral-400 mt-0.5 hidden sm:block"
        >
          Digital Agency
        </span>
      </div>
    </a>

    <!-- Desktop Nav -->
    <nav
      class="hidden md:flex items-center gap-0.5 bg-white/80 backdrop-blur-sm border border-neutral-200/80 px-3 py-1 rounded-full shadow-2xs"
    >
      <div
        class="relative"
        role="presentation"
        onmouseenter={openMega}
        onmouseleave={scheduleCloseMega}
      >
        <button
          onclick={() => (megaOpen ? closeMega() : openMega())}
          class={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            megaOpen ? 'bg-ink text-white' : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
          }`}
        >
          All Pages
          <ChevronDown
            class={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {#each navLinks as link (link.href)}
        <a
          href={link.href}
          class={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
            pathname === link.href
              ? 'bg-ink text-white'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
          }`}
        >
          {link.label}
        </a>
      {/each}

      <!-- Products dropdown -->
      <div
        class="relative"
        role="presentation"
        onmouseenter={openProducts}
        onmouseleave={scheduleCloseProducts}
      >
        <button
          onclick={() => (productsOpen ? closeProducts() : openProducts())}
          class={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
            productsOpen
              ? 'bg-ink text-white'
              : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
          }`}
        >
          Products
          <ChevronDown
            class={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {#if productsOpen}
          <div
            class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-white border border-neutral-200/90 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            role="presentation"
            onmouseenter={openProducts}
            onmouseleave={scheduleCloseProducts}
          >
            {#each PRODUCTS as product (product.url)}
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
              >
                <div class="p-2 rounded-lg bg-saga/10 text-saga shrink-0">
                  <ExternalLink class="w-4 h-4" />
                </div>
                <div>
                  <span
                    class="text-sm font-semibold text-neutral-900 group-hover:text-saga transition-colors flex items-center gap-1"
                  >
                    {product.name}
                    <ArrowUpRight class="w-3.5 h-3.5 opacity-40" />
                  </span>
                  <p class="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </nav>

    <!-- Right Action -->
    <div class="hidden sm:flex items-center gap-3 shrink-0">
      <button
        onclick={ui.openBooking}
        class="bg-ink hover:bg-black text-white text-xs md:text-sm font-semibold px-4.5 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        Book A Free Meeting
        <ArrowUpRight class="w-4 h-4 text-saga" />
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <button
      onclick={() => (mobileOpen = !mobileOpen)}
      class="md:hidden p-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 hover:bg-neutral-50 transition-colors"
      aria-label="Toggle navigation menu"
    >
      {#if mobileOpen}
        <X class="w-5 h-5" />
      {:else}
        <Menu class="w-5 h-5" />
      {/if}
    </button>
  </div>

  <MegaMenu isOpen={megaOpen} onOpen={openMega} onClose={scheduleCloseMega} />

  {#if mobileOpen}
    <div
      class="md:hidden bg-white border-b border-neutral-200 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl"
    >
      <div class="space-y-1">
        {#each mobileLinks as link (link.href)}
          <a
            href={link.href}
            class="block px-4 py-2.5 rounded-xl font-semibold text-sm text-neutral-800 hover:bg-neutral-100"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <div class="pt-3 mt-1 border-t border-neutral-100 space-y-1">
        <p class="px-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Products
        </p>
        {#each PRODUCTS as product (product.url)}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-sm text-neutral-800 hover:bg-neutral-100"
          >
            {product.name}
            <ArrowUpRight class="w-4 h-4 text-neutral-400" />
          </a>
        {/each}
      </div>

      <div class="pt-2 border-t border-neutral-100">
        <button
          onclick={() => {
            mobileOpen = false;
            ui.openBooking();
          }}
          class="w-full bg-ink text-white text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
        >
          Book A Free Meeting <ArrowUpRight class="w-4 h-4 text-saga" />
        </button>
      </div>
    </div>
  {/if}
</header>
