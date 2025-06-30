'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';

import { type Review as ReviewType } from '../model/types';

import { Review } from './Review';
import { ReviewPagination } from './ReviewPagination';

type ReviewCarouselProps = {
  className?: string;
  reviews: ReviewType[];
};

export const ReviewCarousel = (props: ReviewCarouselProps) => {
  const { className = '', reviews = [] } = props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className={cn('w-full px-16', className)} setApi={setApi}>
      <CarouselContent className="-ml-8 items-center">
        {reviews.map(({ id, author, text, rating }) => (
          <CarouselItem className="pl-8" key={id}>
            <Review author={author} text={text} rating={rating} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
      <ReviewPagination reviews={reviews} current={current} />
    </Carousel>
  );
};
