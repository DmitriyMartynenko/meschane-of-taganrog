import { create } from 'zustand';

type BookingState = {
  phone: string;
  setPhone: (value: string) => void;
  reset: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  phone: '',
  setPhone: (value) => set({ phone: value }),
  reset: () => set({ phone: '' }),
}));