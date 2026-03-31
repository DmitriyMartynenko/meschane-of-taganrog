import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {
  Button,
  Heading,
  HeadingHighlight,
  HeadingTitle,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui';

import { BookingForm } from '../BookingForm';

import { BookingDialogProps } from './BookingDialog';

export const BookingDialogMobile = (props: BookingDialogProps) => {
  const { isOpen, handleOpenChange, form, onSubmit } = props;

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="rounded-none border-t border-primary/30 bg-background-primary px-4 pt-6"
      >
        <div className="flex flex-col items-center gap-6 border border-primary border-b-transparent px-6 py-8">
          <SheetHeader className="gap-1 p-0 text-center">
            <Heading>
              <SheetTitle asChild>
                <HeadingTitle className="text-center font-normal">
                  <HeadingHighlight>Оставьте заявку</HeadingHighlight>
                  <br />
                  <span className="text-foreground-primary">Мы с вами свяжемся</span>
                </HeadingTitle>
              </SheetTitle>
              <VisuallyHidden>
                <SheetDescription>Форма записи на экскурсию</SheetDescription>
              </VisuallyHidden>
            </Heading>
          </SheetHeader>
          <BookingForm className="w-full max-w-lg" form={form} onSubmit={onSubmit} />
          <SheetClose asChild>
            <Button
              className="p-0 text-muted-primary"
              variant="ghost"
              onClick={() => handleOpenChange(isOpen)}
            >
              Отмена
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
