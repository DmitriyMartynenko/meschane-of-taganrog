import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

import { useBookingStore } from '../model/store';

import { BookingForm } from './BookingForm';

export const BookingDialog = () => {
  const { open, setOpen } = useBookingStore();

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col gap-8" aria-describedby="">
        <DialogHeader>
          <DialogTitle className="sr-only">Заявка на экскурсию</DialogTitle>
          <HeadingTitle className="text-center">
            <HeadingHighlight>Оставьте заявку</HeadingHighlight>
            <br />
            Мы с вами свяжемся
          </HeadingTitle>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
};
