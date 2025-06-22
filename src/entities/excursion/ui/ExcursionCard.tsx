import Image from 'next/image';
import { useState } from 'react';
import { CalendarDays, Clock9, ReceiptRussianRuble } from 'lucide-react';

import { useBookingStore } from '@/features/booking';
import { cn, formatDate, formatTime } from '@/shared/lib';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  StarRating,
} from '@/shared/ui';

import { type Excursion } from '../model/types';

import { ExcursionCardDialog } from './ExcursionCardDialog';

type ExcursionCardProps = {
  className?: string;
  excursion: Excursion;
};

export const ExcursionCard = (props: ExcursionCardProps) => {
  const { className, excursion } = props;
  const { title, description, image, duration, date, price, rating } = excursion;

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const setOpenBookingDialog = useBookingStore((state) => state.setOpenDialog);

  const onOpenBookingDialog = () => {
    setOpenBookingDialog(true);
  };

  const onOpenExcursionDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  return (
    <Card
      className={cn(
        'w-full gap-0 p-0 transition-[box-shadow,scale] duration-300 ease-in-out hover:scale-[101%] hover:shadow-md',
        className
      )}
    >
      <Image className="h-auto w-full" src={image} alt={title} />
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <CardHeader className="flex-1">
          <CardTitle className="flex items-baseline justify-between">
            {title}
            {rating && (
              <StarRating
                className="font-montserrat text-sm"
                rating={rating}
                variant="single"
                size="sm"
              />
            )}
          </CardTitle>
          <CardDescription className="text-foreground-primary">{description}</CardDescription>
        </CardHeader>
        <CardContent className="items-center gap-4 font-semibold text-secondary">
          <div className="flex items-center gap-1">
            <Clock9 className="text-current" size={16} />
            {formatTime(duration)}
          </div>
          <div className="flex items-center gap-1">
            <ReceiptRussianRuble className="text-current" size={16} />
            {price} ₽
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="text-current" size={16} />
            {formatDate(date)}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="flex-1" variant="outline" onClick={onOpenExcursionDialog}>
            Подробнее
          </Button>
          <Button className="flex-1" variant="primary" textWhite onClick={onOpenBookingDialog}>
            Записаться
          </Button>
        </CardFooter>
        <ExcursionCardDialog
          open={openDialog}
          onOpenChange={onOpenExcursionDialog}
          excursion={excursion}
        />
      </div>
    </Card>
  );
};
