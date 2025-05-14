import { create } from 'zustand';

import { type BookingForm } from './types';

type BookingState = {
  form: BookingForm;
  setForm: (value: BookingForm | ((prevState: BookingForm) => BookingForm)) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  form: {
    name: '',
    phone: '',
    email: '',
  },
  setForm: (value) =>
    set((state) => ({
      form: typeof value === 'function' ? value(state.form) : value,
    })),
  open: false,
  setOpen: (value) => set({ open: value }),
}));
