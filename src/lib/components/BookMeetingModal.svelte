<script lang="ts">
  import * as Dialog from '#lib/components/ui/dialog';
  import { CircleCheckBig as CheckCircle2, Sparkles, Send } from '@lucide/svelte';
  import { ui } from '#lib/stores/ui.svelte';

  let submitting = $state(false);
  let submitted = $state(false);
  let errored = $state(false);
  let formData = $state({
    name: '',
    email: '',
    company: '',
    service: 'Reels & Short-Form Video',
    budget: 'NPR 15,000 - 40,000 / mo',
    date: 'Tomorrow at 3:00 PM',
    notes: '',
    website: '' // honeypot
  });

  const slots = [
    'Tomorrow at 10:00 AM',
    'Tomorrow at 3:00 PM',
    'Thursday at 2:00 PM',
    'Friday at 11:00 AM'
  ];

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (submitting) return;
    submitting = true;
    errored = false;

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', ...formData, quote: ui.quote })
      });
      if (!res.ok) throw new Error(String(res.status));
      submitted = true;
      setTimeout(() => ui.closeBooking(), 3200);
    } catch {
      errored = true;
    } finally {
      submitting = false;
    }
  }

  // Reset the panel back to the form whenever the dialog is closed.
  $effect(() => {
    if (!ui.bookingOpen) {
      submitted = false;
      errored = false;
      submitting = false;
    }
  });

  const inputClass =
    'w-full bg-canvas border border-neutral-200/90 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-saga focus:ring-1 focus:ring-saga';
</script>

<Dialog.Root bind:open={ui.bookingOpen}>
  <Dialog.Content
    showCloseButton
    class="bg-white rounded-[32px] border border-neutral-200 shadow-2xl max-w-xl p-6 sm:p-8"
  >
    {#if submitted}
      <div class="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
        <div
          class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"
        >
          <CheckCircle2 class="w-10 h-10" />
        </div>
        <Dialog.Title class="text-2xl font-black text-ink">Request Received!</Dialog.Title>
        <p class="text-xs text-neutral-600 max-w-sm mx-auto">
          Thanks — we've got your details. Our team will reach out to
          <strong class="text-black">{formData.email || 'your email'}</strong>
          shortly to confirm your call.
        </p>
      </div>
    {:else}
      <div>
        <div
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saga/10 text-saga text-[11px] font-bold mb-3"
        >
          <Sparkles class="w-3.5 h-3.5" />
          Saga 15-Min Strategy Call
        </div>

        <Dialog.Title class="text-2xl font-extrabold text-ink tracking-tight mb-1">
          Book A Free Discovery Meeting
        </Dialog.Title>
        <Dialog.Description class="text-xs text-neutral-500 mb-6">
          Pick a date, tell us about your goals, and we'll prepare a custom video or dev roadmap.
        </Dialog.Description>

        <form onsubmit={handleSubmit} class="space-y-4">
          <input
            type="text"
            name="website"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
            class="hidden"
            bind:value={formData.website}
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="bm-name" class="block text-xs font-bold text-neutral-800 mb-1">
                Your Name *
              </label>
              <input
                id="bm-name"
                type="text"
                required
                placeholder="Alex Johnson"
                bind:value={formData.name}
                class={inputClass}
              />
            </div>

            <div>
              <label for="bm-email" class="block text-xs font-bold text-neutral-800 mb-1">
                Email Address *
              </label>
              <input
                id="bm-email"
                type="email"
                required
                placeholder="alex@brand.com"
                bind:value={formData.email}
                class={inputClass}
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="bm-service" class="block text-xs font-bold text-neutral-800 mb-1">
                Primary Service Needed
              </label>
              <select id="bm-service" bind:value={formData.service} class={inputClass}>
                <option>Reels & Short-Form Video</option>
                <option>YouTube Shorts Editing</option>
                <option>Web Engineering & Apps</option>
                <option>Motion Graphics & 3D</option>
                <option>Dedicated Editor/Dev Placement</option>
              </select>
            </div>

            <div>
              <label for="bm-budget" class="block text-xs font-bold text-neutral-800 mb-1">
                Monthly Budget Range
              </label>
              <select id="bm-budget" bind:value={formData.budget} class={inputClass}>
                <option>NPR 5,000 - 15,000 / mo</option>
                <option>NPR 15,000 - 40,000 / mo</option>
                <option>NPR 40,000 - 1,00,000+ / mo</option>
                <option>One-Time Custom Project</option>
              </select>
            </div>
          </div>

          <div>
            <span class="block text-xs font-bold text-neutral-800 mb-1">Preferred Time Slot</span>
            <div class="grid grid-cols-2 gap-2 text-xs font-semibold text-neutral-700">
              {#each slots as slot, idx (idx)}
                <button
                  type="button"
                  onclick={() => (formData.date = slot)}
                  class={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    formData.date === slot
                      ? 'bg-ink text-white border-ink'
                      : 'bg-canvas hover:bg-neutral-100 border-neutral-200'
                  }`}
                >
                  {slot}
                </button>
              {/each}
            </div>
          </div>

          <div>
            <label for="bm-notes" class="block text-xs font-bold text-neutral-800 mb-1">
              Project Notes (Optional)
            </label>
            <textarea
              id="bm-notes"
              rows={2}
              placeholder="Tell us about your brand, channel, or video editing needs..."
              bind:value={formData.notes}
              class={inputClass}
            ></textarea>
          </div>

          {#if errored}
            <p class="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl p-3">
              Something went wrong sending your request. Please try again, or email us at
              <a href="mailto:info@saga.com.np" class="font-bold underline">info@saga.com.np</a>.
            </p>
          {/if}

          <button
            type="submit"
            disabled={submitting}
            class="w-full bg-saga hover:bg-saga-dark text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-saga/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending…' : 'Confirm Call Booking'}
            <Send class="w-4 h-4" />
          </button>
        </form>
      </div>
    {/if}
  </Dialog.Content>
</Dialog.Root>
