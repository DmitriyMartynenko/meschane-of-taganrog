import { cn } from '@/shared/lib';

import { type Review } from '../model/types';

type ReviewPaginationProps = {
  className?: string;
  reviews: Review[];
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
                'size-4 border-3 border-background-secondary bg-secondary outline-2 outline-secondary'
            )}
          />
        );
      })}
    </div>
  );
};
