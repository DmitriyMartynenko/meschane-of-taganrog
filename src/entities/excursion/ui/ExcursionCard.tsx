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
import { ExcursionStats } from './ExcursionStats';

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
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 lg:gap-4">
        <CardHeader className="flex-1 gap-1.5">
          <CardTitle className="flex items-start justify-between gap-4 transition-colors duration-450 ease-in-out group-hover:text-accent-primary">
            <span>{title}</span>
            {rating && (
              <StarRating
                className="font-montserrat text-base [&_svg]:size-5"
                rating={rating}
                variant="single"
              />
            )}
          </CardTitle>
          <CardDescription className="text-foreground-primary">{description}</CardDescription>
        </CardHeader>
        <div className="h-px bg-linear-to-r from-primary/30 via-primary/15 to-transparent" />
        <CardContent className="flex flex-col gap-1 font-semibold lg:flex-row lg:gap-3">
          {excursionCardStats.map((stats) => (
            <ExcursionStats
              className="text-primary"
              key={stats.label}
              icon={stats.icon}
              label={stats.label}
            />
          ))}
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-1.5 lg:flex-row">
          <Button className="lg:basis-1/2" variant="outline" onClick={() => setOpenDetails(true)}>
            Подробнее
          </Button>
          <Button className="lg:basis-1/2" variant="primary" lightText onClick={onStartBooking}>
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
