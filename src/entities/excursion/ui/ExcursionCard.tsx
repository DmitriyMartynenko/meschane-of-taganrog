'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CalendarDays, Clock9, ReceiptRussianRuble } from 'lucide-react';

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

import { type Excursion } from '../model/excursion.types';

import { ExcursionDetails } from './ExcursionDetails';

type ExcursionCardProps = {
  className?: string;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionCard = (props: ExcursionCardProps) => {
  const { className, excursion, onStartBooking } = props;
  const { title, description, image, duration, date, price, rating } = excursion;

  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return (
    <Card
      className={cn(
        'w-full gap-0 p-0 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg',
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
        <CardContent className="items-center gap-4 font-semibold text-primary">
          <div className="flex items-center gap-1.5">
            <Clock9 className="text-current" size={16} />
            {formatTime(duration)}
          </div>
          <div className="flex items-center gap-1.5">
            <ReceiptRussianRuble className="text-current" size={16} />
            {price} ₽
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="text-current" size={16} />
            {formatDate(date)}
          </div>
        </CardContent>
        <CardFooter className="gap-1.5">
          <Button className="flex-1" variant="outline" onClick={() => setOpenDetails(true)}>
            Подробнее
          </Button>
          <Button className="flex-1" variant="primary" textWhite onClick={onStartBooking}>
            Записаться
          </Button>
        </CardFooter>
        <ExcursionDetails
          isOpen={openDetails}
          setIsOpen={setOpenDetails}
          excursion={excursion}
          onStartBooking={onStartBooking}
        />
      </div>
    </Card>
  );
};
