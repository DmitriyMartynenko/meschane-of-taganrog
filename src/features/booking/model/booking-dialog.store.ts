import { create } from 'zustand';

type BookingDialogState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useBookingDialogStore = create<BookingDialogState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
