import { Star, StarHalf } from 'lucide-react';

import { cn } from '../../lib/utils/cn';

type StarRatingProps = {
  className?: string;
  rating: number;
};

export const StarRating = (props: StarRatingProps) => {
  const { className, rating } = props;

  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating !== fullStarsCount;

  return (
    <div className={cn('fill-primary text-primary', className)}>
      {[...Array(fullStarsCount)].map((_, index) => (
        <Star key={index} className="fill-inherit" />
      ))}
      {hasHalfStar && <StarHalf className="fill-inherit" />}
    </div>
  );
};
