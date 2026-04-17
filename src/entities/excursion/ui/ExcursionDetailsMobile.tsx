import Image from 'next/image';
import {
  BookOpen,
  CalendarDays,
  Camera,
  Clock9,
  Gift,
  Map,
  MapPinned,
  ReceiptRussianRuble,
  Users,
} from 'lucide-react';

import { formatDate, formatTime } from '@/shared/lib';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  StarRating,
} from '@/shared/ui';

import { Excursion } from '../model/excursion.types';

type ExcursionDetailsMobileProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionDetailsMobile = (props: ExcursionDetailsMobileProps) => {
  const { excursion, isOpen, onOpenChange, onStartBooking } = props;

  const {
    title,
    image,
    rating,
    description,
    duration,
    price,
    date,
    maxParticipants,
    fullDescription,
    route,
    includes,
    highlights,
    meetingPoint,
  } = excursion;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="max-h-[90dvh] overflow-y-auto rounded-none border-t-24 border-background-primary bg-background-primary px-6"
      >
        <Card className="size-full gap-4 border-none p-0 shadow-none">
          <Image className="h-64 w-full object-cover object-center" src={image} alt={title} />
          <CardHeader className="flex-1 gap-2 text-center">
            <SheetTitle asChild>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </SheetTitle>
            <SheetDescription asChild>
              <CardDescription className="text-base text-foreground-primary">
                {description}
              </CardDescription>
            </SheetDescription>
          </CardHeader>
          <CardContent className="flex-col gap-4">
            <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-y-2 font-semibold text-primary">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Clock9 className="text-current" size={20} />
                    {formatTime(duration)}
                  </div>
                  <div className="flex items-center gap-2">
                    <ReceiptRussianRuble className="text-current" size={20} />
                    {price} ₽
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-current" size={20} />
                  {formatDate(date)}
                </div>
                {maxParticipants && (
                  <div className="flex items-center gap-2">
                    <Users className="text-current" size={20} />
                    до {maxParticipants} чел.
                  </div>
                )}
              </div>
              {rating && <StarRating className="justify-center" rating={rating} variant="stars" />}
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
            {fullDescription && (
              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-primary">
                  <BookOpen size={20} />
                  Об экскурсии
                </h3>
                <p className="leading-relaxed">{fullDescription}</p>
              </div>
            )}
            {route && (
              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-primary">
                  <Map size={20} />
                  Маршрут
                </h3>
                <p>{route}</p>
              </div>
            )}
            {includes.length > 0 && (
              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-primary">
                  <Gift size={20} />
                  Что включено
                </h3>
                <div className="flex flex-wrap gap-2">
                  {includes.map((item, index) => (
                    <span
                      key={`${item}_${index}`}
                      className="bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {highlights.length > 0 && (
              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-primary">
                  <Camera size={20} />
                  Основные моменты
                </h3>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {meetingPoint && (
              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-primary">
                  <MapPinned size={20} />
                  Место встречи
                </h3>
                <p>{meetingPoint}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex-1 flex-col">
            <Button className="w-full" variant="primary" lightText onClick={onStartBooking}>
              Записаться
            </Button>
            <SheetClose asChild>
              <Button
                className="text-muted-primary"
                variant="ghost"
                onClick={() => onOpenChange(false)}
              >
                Закрыть
              </Button>
            </SheetClose>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
};
