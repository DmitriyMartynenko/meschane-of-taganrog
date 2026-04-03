'use client';

import { useEffect, useEffectEvent, useState } from 'react';

import { cn } from '@/shared/lib';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';

import { type ReviewItem as ReviewType } from '../model/review.types';

import { ReviewItem } from './ReviewItem';
import { ReviewPagination } from './ReviewPagination';

type ReviewCarouselProps = {
  className?: string;
  reviews?: ReviewType[];
};

export const ReviewCarousel = (props: ReviewCarouselProps) => {
  const { className, reviews = [] } = props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  const onSelect = useEffectEvent(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    onSelect();
  }, [api]);

  return (
    <Carousel
      className={cn('relative lg:px-8 xl:px-16', className)}
      setApi={setApi}
      opts={{
        watchDrag: (_, event) => event.type !== 'mousedown',
      }}
    >
      <div className="absolute top-1/2 left-1/2 h-[50%] w-[calc(100%-80px)] -translate-1/2 border border-primary" />
      <CarouselContent className="-ml-8 items-center">
        {reviews.map(({ id, author, text, rating }) => (
          <CarouselItem className="pl-8" key={id}>
            <ReviewItem className="min-h-75" author={author} text={text} rating={rating} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden p-1.5 lg:block lg:p-2" />
      <CarouselPrevious className="hidden p-1.5 lg:block lg:p-2" />
      <ReviewPagination reviews={reviews} current={current} carouselApi={api} />
    </Carousel>
  );
};
