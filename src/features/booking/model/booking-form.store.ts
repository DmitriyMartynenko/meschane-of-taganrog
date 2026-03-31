import { create } from 'zustand';

import { type BookingFormFields } from './booking-form.types';

interface BookingFormState {
  phone: BookingFormFields['phone'];
  setPhone: (value: BookingFormFields['phone']) => void;
}

export const useBookingFormStore = create<BookingFormState>((set) => ({
  phone: '',
  setPhone: (value) => set({ phone: value }),
}));
