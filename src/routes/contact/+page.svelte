<script lang="ts">
  import { Mail, Phone, MapPin, Send, CircleCheckBig as CheckCircle2, Clock } from '@lucide/svelte';

  let submitted = $state(false);
  let formData = $state({
    name: '',
    email: '',
    phone: '',
    subject: 'Video Editing Enquiry',
    message: ''
  });

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    submitted = true;
  }

  const inputClass =
    'w-full bg-canvas border border-neutral-200/90 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-saga';
</script>

<svelte:head>
  <title>Contact — Saga Infographics</title>
  <meta
    name="description"
    content="Questions about Saga's editing workflows or custom web development packages? Our team responds within 2 hours."
  />
</svelte:head>

<div class="py-12 bg-canvas min-h-screen">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ CONTACT SAGA ]
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
        Let's build something
        <span class="font-serif-italic text-saga font-normal">viral together</span>
      </h1>
      <p class="mt-4 text-base text-neutral-600 leading-relaxed">
        Have questions about our editing workflows or custom web development packages? Our team
        responds within 2 hours.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="md:col-span-5 space-y-6">
        <div class="bg-white rounded-[28px] p-8 border border-neutral-200/90 shadow-xs space-y-6">
          <h2 class="text-xl font-extrabold text-ink tracking-tight">Saga HQ & Contact Info</h2>

          <div class="space-y-4 text-xs sm:text-sm text-neutral-700">
            <div class="flex items-start gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-saga/10 text-saga flex items-center justify-center shrink-0"
              >
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-bold text-ink">Kathmandu Studio</h3>
                <p class="text-neutral-500 text-xs">Kathmandu 44600, Nepal (saga.com.np)</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0"
              >
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-bold text-ink">Email Inquiry</h3>
                <p class="text-neutral-500 text-xs">info@saga.com.np</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0"
              >
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-bold text-ink">Phone & WhatsApp</h3>
                <p class="text-neutral-500 text-xs">+977 (01) 400-SAGA</p>
              </div>
            </div>
          </div>

          <div
            class="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500"
          >
            <Clock class="w-4 h-4 text-saga" /> Average Response Time:
            <strong class="text-black">&lt; 2 Hours</strong>
          </div>
        </div>

        <div
          class="bg-ink text-white rounded-[28px] p-6 border border-neutral-800 shadow-md flex items-center justify-between"
        >
          <div>
            <h4 class="text-sm font-bold">Serving Global Clients</h4>
            <p class="text-xs text-neutral-400">US, EU, Asia & Australia Timezones</p>
          </div>
          <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
        </div>
      </div>

      <div class="md:col-span-7">
        <div class="bg-white rounded-[28px] p-8 sm:p-10 border border-neutral-200/90 shadow-xs">
          {#if submitted}
            <div class="py-12 text-center space-y-4">
              <div
                class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
              >
                <CheckCircle2 class="w-10 h-10" />
              </div>
              <h3 class="text-2xl font-black text-ink">Message Delivered!</h3>
              <p class="text-xs text-neutral-600 max-w-sm mx-auto">
                Thank you for reaching out to Saga. Our creative team will review your enquiry and
                respond shortly.
              </p>
            </div>
          {:else}
            <form onsubmit={handleSubmit} class="space-y-4">
              <h2 class="text-2xl font-extrabold text-ink tracking-tight mb-2">
                Send Us A Direct Project Message
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="c-name" class="block text-xs font-bold text-neutral-800 mb-1">
                    Name *
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    bind:value={formData.name}
                    class={inputClass}
                  />
                </div>

                <div>
                  <label for="c-email" class="block text-xs font-bold text-neutral-800 mb-1">
                    Email *
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    bind:value={formData.email}
                    class={inputClass}
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="c-phone" class="block text-xs font-bold text-neutral-800 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="c-phone"
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    bind:value={formData.phone}
                    class={inputClass}
                  />
                </div>

                <div>
                  <label for="c-subject" class="block text-xs font-bold text-neutral-800 mb-1">
                    Inquiry Topic
                  </label>
                  <select id="c-subject" bind:value={formData.subject} class={inputClass}>
                    <option>Video Editing Enquiry</option>
                    <option>Web Engineering & App Dev</option>
                    <option>Hire Dedicated Editor/Dev</option>
                    <option>General Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="c-message" class="block text-xs font-bold text-neutral-800 mb-1">
                  Project Brief / Message *
                </label>
                <textarea
                  id="c-message"
                  rows={4}
                  required
                  placeholder="Describe your raw video volume, channel, target goals..."
                  bind:value={formData.message}
                  class={inputClass}
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-saga hover:bg-saga-dark text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                Send Direct Message <Send class="w-4 h-4" />
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
