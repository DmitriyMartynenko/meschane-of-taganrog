import { EmblaCarouselType } from 'embla-carousel';

import { cn } from '@/shared/lib';

import { type ReviewItem } from '../model/review.types';

type ReviewPaginationProps = {
  className?: string;
  reviews: ReviewItem[];
  current: number;
  carouselApi?: EmblaCarouselType;
};

export const ReviewPagination = (props: ReviewPaginationProps) => {
  const { className, reviews = [], current = 0, carouselApi } = props;

  const handlePaginationClick = (index: number) => {
    if (!carouselApi) return;

    carouselApi.scrollTo(index);
  };

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2', className)}>
      {reviews.map((review, index) => {
        const isActive = index === current;
        return (
          <button
            className={cn(
              'size-2.5 cursor-pointer rounded-full bg-background-primary lg:size-3',
              isActive &&
                'size-3.5 cursor-auto border-3 border-background-secondary bg-primary outline-2 outline-primary lg:size-4'
            )}
            key={review.id}
            onClick={() => handlePaginationClick(index)}
          />
        );
      })}
    </div>
  );
};
