import { Star, StarHalf } from 'lucide-react';

import { cn } from '@/shared/lib';

const MAX_RATING = 5;

type StarRatingProps = {
  className?: string;
  rating: number;
  variant?: 'stars' | 'single';
};

export const StarRating = (props: StarRatingProps) => {
  const { className = '', rating, variant = 'stars' } = props;

  if (variant === 'single') {
    return <SingleStarRating className={className} rating={rating} />;
  }

  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating !== filledStarsCount;
  const emptyStarsCount = MAX_RATING - filledStarsCount - Number(hasHalfStar);

  return (
    <div className={cn('flex gap-1 fill-secondary text-secondary [&_svg]:size-6', className)}>
      {Array.from({ length: filledStarsCount }).map((_, index) => (
        <Star key={`filled_${index}`} className={cn('fill-current')} strokeWidth={2} />
      ))}
      {hasHalfStar && (
        <Star>
          <StarHalf className={cn('fill-current')} strokeWidth={2} />
        </Star>
      )}
      {Array.from({ length: emptyStarsCount }).map((_, index) => (
        <Star key={`empty_${index}`} strokeWidth={2} />
      ))}
    </div>
  );
};

type SingleStarRatingProps = Required<Omit<StarRatingProps, 'variant'>>;

const SingleStarRating = (props: SingleStarRatingProps) => {
  const { className, rating } = props;

  return (
    <div className={cn('flex items-center gap-1 text-secondary', className)}>
      <Star className={cn('fill-secondary text-inherit')} fill="currentColor" strokeWidth={2} />
      <span className="mt-0.5 font-semibold text-inherit">{rating.toFixed(1)}</span>
    </div>
  );
};
