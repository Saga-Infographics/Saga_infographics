import type { WorkItem } from '#lib/types';

/**
 * Global UI state for the modals that live once in the root layout.
 * Uses Svelte 5 runes in a module-level singleton.
 */
class UIState {
  bookingOpen = $state(false);
  calculatorOpen = $state(false);
  showreelOpen = $state(false);
  selectedWork = $state<WorkItem | null>(null);
  /** Price-calculator estimate carried into the booking form. */
  quote = $state('');

  openBooking = () => {
    this.calculatorOpen = false;
    this.selectedWork = null;
    this.bookingOpen = true;
  };

  closeBooking = () => {
    this.bookingOpen = false;
    this.quote = '';
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

  selectWork = (work: WorkItem) => {
    this.selectedWork = work;
  };

  clearWork = () => {
    this.selectedWork = null;
  };
}

export const ui = new UIState();
