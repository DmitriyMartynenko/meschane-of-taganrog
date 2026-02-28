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

import { type Excursion, type ExcursionStatsConfig } from '../model/excursion.types';

import { ExcursionDetails } from './ExcursionDetails';
import { ExcursionStatsItem } from './ExcursionStatsItem';

type ExcursionCardProps = {
  className?: string;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionCard = (props: ExcursionCardProps) => {
  const { className, excursion, onStartBooking } = props;
  const { title, description, image, duration, date, price, rating } = excursion;

  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const excursionCardStats: ExcursionStatsConfig[] = [
    {
      label: formatTime(duration),
      icon: Clock9,
    },
    {
      label: `${price} ₽`,
      icon: ReceiptRussianRuble,
    },
    {
      label: formatDate(date),
      icon: CalendarDays,
    },
  ];

  return (
    <Card
      className={cn(
        'group relative flex w-full flex-col gap-0 overflow-hidden border-border-primary p-0 transition-all duration-450 ease-in-out',
        'hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          className="h-auto w-full transition-transform duration-450 ease-in-out select-none group-hover:scale-105"
          src={image}
          alt={title}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-450 ease-in-out group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <CardHeader className="flex-1">
          <CardTitle className="flex items-baseline justify-between gap-2 transition-colors duration-450 ease-in-out group-hover:text-accent-primary">
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
        <CardContent className="flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold">
          {excursionCardStats.map((stats) => (
            <ExcursionStatsItem
              className="text-primary"
              key={stats.label}
              icon={stats.icon}
              label={stats.label}
            />
          ))}
        </CardContent>
        <CardFooter className="flex gap-1.5">
          <Button className="flex-1" variant="outline" onClick={() => setOpenDetails(true)}>
            Подробнее
          </Button>
          <Button className="flex-1" variant="primary" lightText onClick={onStartBooking}>
            Записаться
          </Button>
        </CardFooter>
      </div>
      <ExcursionDetails
        isOpen={openDetails}
        setIsOpen={setOpenDetails}
        excursion={excursion}
        onStartBooking={onStartBooking}
      />
    </Card>
  );
};
