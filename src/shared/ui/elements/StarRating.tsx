import { Star, StarHalf } from 'lucide-react';

import { cn } from '../../lib/utils/cn';

type StarRatingProps = {
  className?: string;
  rating: number;
};

export const StarRating = (props: StarRatingProps) => {
  const { className, rating } = props;

  const MAX_RATING = 5;

  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating !== filledStarsCount;
  const emptyStartCount = MAX_RATING - filledStarsCount - Number(hasHalfStar);

  return (
    <div className={cn('fill-primary text-primary', className)}>
      {Array.from({ length: filledStarsCount }).map((_, index) => (
        <Star key={`filled-${index}`} className="fill-current" />
      ))}
      {hasHalfStar && (
        <Star>
          <StarHalf className="fill-current" />
        </Star>
      )}
      {Array.from({ length: emptyStartCount }).map((_, index) => (
        <Star key={`empty-${index}`} />
      ))}
    </div>
  );
};
