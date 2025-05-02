'use client';

import { useEffect, useState } from 'react';

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

import { cn } from '@/shared/lib';

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
      <CarouselContent className="items-center -ml-8">
        {reviews.map((review) => {
          const { id, author, text, rating } = review;
          return (
            <CarouselItem className="pl-8" key={id}>
              <Review author={author} text={text} rating={rating} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
      <ReviewPagination reviews={reviews} current={current} />
    </Carousel>
  );
};
