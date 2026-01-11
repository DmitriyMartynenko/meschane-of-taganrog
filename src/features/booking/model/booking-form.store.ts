import { create } from 'zustand';

import { type BookingForm } from './booking-form.types';

interface BookingFormState {
  phone: BookingForm['phone'];
  setPhone: (value: BookingForm['phone']) => void;
}

export const useBookingFormStore = create<BookingFormState>((set) => ({
  phone: '',
  setPhone: (value) => set({ phone: value }),
}));
