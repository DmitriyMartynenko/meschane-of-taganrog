'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

import { useBookingDialogStore } from '../model/booking-dialog.store';

type BookingTrigger = {
  className?: string;
  children?: ReactNode;
};

export const BookingTrigger = (props: BookingTrigger) => {
  const { className, children = 'Записаться на экскурсию' } = props;

  const open = useBookingDialogStore((state) => state.open);

  return (
    <Button className={cn('w-full', className)} variant="outline" lightText onClick={() => open()}>
      {children}
    </Button>
  );
};
