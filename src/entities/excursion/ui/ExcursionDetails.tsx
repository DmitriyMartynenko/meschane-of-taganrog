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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  StarRating,
} from '@/shared/ui';

import { Excursion } from '../model/excursion.types';

type ExcursionDetailsProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  excursion: Excursion;
  onStartBooking: () => void;
};

export const ExcursionDetails = (props: ExcursionDetailsProps) => {
  const { isOpen, setIsOpen, excursion, onStartBooking } = props;
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[90vh] flex-col overflow-y-auto p-2">
        <Card className="w-full border-none p-0 shadow-none">
          <DialogHeader className="w-full gap-4">
            <Image className="h-128 w-full object-cover" src={image} alt={title} />
            <CardHeader className="flex-1 gap-2 text-center">
              <DialogTitle asChild>
                <CardTitle className="text-3xl">{title}</CardTitle>
              </DialogTitle>
              <DialogDescription asChild>
                <CardDescription className="text-lg text-foreground-primary">
                  {description}
                </CardDescription>
              </DialogDescription>
            </CardHeader>
          </DialogHeader>
          <CardContent className="flex-col gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex justify-center gap-8 font-semibold text-primary">
                <div className="flex items-center gap-2">
                  <Clock9 className="text-current" size={20} />
                  {formatTime(duration)}
                </div>
                <div className="flex items-center gap-2">
                  <ReceiptRussianRuble className="text-current" size={20} />
                  {price} ₽
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
            {fullDescription && (
              <div>
                <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold text-primary">
                  <BookOpen size={20} />
                  Об экскурсии
                </h3>
                <p className="leading-relaxed">{fullDescription}</p>
              </div>
            )}
            {route && (
              <div>
                <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold text-primary">
                  <Map size={20} />
                  Маршрут
                </h3>
                <p>{route}</p>
              </div>
            )}
            {includes.length > 0 && (
              <div>
                <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold text-primary">
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
                <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold text-primary">
                  <Camera size={20} />
                  Основные моменты
                </h3>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {meetingPoint && (
              <div>
                <h3 className="mb-1.5 flex items-center gap-2 text-lg font-semibold text-primary">
                  <MapPinned size={20} />
                  Место встречи
                </h3>
                <p>{meetingPoint}</p>
              </div>
            )}
          </CardContent>
          <DialogFooter>
            <CardFooter className="flex-1">
              <Button className="w-full" variant="primary" lightText onClick={onStartBooking}>
                Записаться
              </Button>
            </CardFooter>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
