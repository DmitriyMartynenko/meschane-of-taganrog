import { cn } from '@/shared/lib';

import { type ReviewItem } from '../model/review.types';

type ReviewPaginationProps = {
  className?: string;
  reviews: ReviewItem[];
  current: number;
};

export const ReviewPagination = (props: ReviewPaginationProps) => {
  const { className = '', reviews = [], current = 1 } = props;

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2', className)}>
      {reviews.map((review, index) => {
        const isActive = index + 1 === current;
        return (
          <button
            key={review.id}
            className={cn(
              'size-3 rounded-full bg-background-primary',
              isActive &&
                'size-4 border-3 border-background-secondary bg-primary outline-2 outline-primary'
            )}
          />
        );
      })}
    </div>
  );
};
