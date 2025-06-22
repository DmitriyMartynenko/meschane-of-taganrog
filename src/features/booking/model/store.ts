import { create } from 'zustand';

import { type BookingForm } from './types';

type BookingState = {
  formValues: BookingForm;
  setFormValues: (value: BookingForm | ((prevState: BookingForm) => BookingForm)) => void;
  resetFormValues: () => void;
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  openCancelDialog: boolean;
  setOpenCancelDialog: (value: boolean) => void;
};

const initialState = {
  name: '',
  phone: '',
  email: '',
};

export const useBookingStore = create<BookingState>((set) => ({
  formValues: initialState,
  setFormValues: (value) =>
    set((state) => ({
      formValues: typeof value === 'function' ? value(state.formValues) : value,
    })),
  resetFormValues: () => set({ formValues: initialState }),
  openDialog: false,
  setOpenDialog: (value) => set({ openDialog: value }),
  openCancelDialog: false,
  setOpenCancelDialog: (value) => set({ openCancelDialog: value }),
}));
