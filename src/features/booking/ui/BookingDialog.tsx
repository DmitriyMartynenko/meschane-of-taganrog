import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

import { BookingForm } from './BookingForm';

type BookingDialogProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
};

export const BookingDialog = (props: BookingDialogProps) => {
  const { open, onOpenChange } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col gap-8">
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
