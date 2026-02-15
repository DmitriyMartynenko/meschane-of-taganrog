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

    setCurrent(api.selectedScrollSnap() + 1);
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    onSelect();
  }, [api]);

  return (
    <Carousel className={cn('w-full px-16', className)} setApi={setApi}>
      <CarouselContent className="-ml-8 items-center">
        {reviews.map(({ id, author, text, rating }) => (
          <CarouselItem className="pl-8" key={id}>
            <ReviewItem author={author} text={text} rating={rating} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
      <ReviewPagination reviews={reviews} current={current} />
    </Carousel>
  );
};
