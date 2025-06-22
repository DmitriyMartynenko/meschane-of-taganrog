import { Star, StarHalf } from 'lucide-react';

import { cn } from '../../lib/utils/cn';

const MAX_RATING = 5;
const STAR_SIZES = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
} as const;

type StarRatingProps = {
  className?: string;
  rating: number;
  variant?: 'stars' | 'single';
  size?: keyof typeof STAR_SIZES;
};

export const StarRating = (props: StarRatingProps) => {
  const { className = '', rating, variant = 'stars', size = 'md' } = props;

  if (variant === 'single') {
    return <SingleStarRating className={className} rating={rating} size={size} />;
  }

  const starSize = STAR_SIZES[size];
  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating !== filledStarsCount;
  const emptyStarsCount = MAX_RATING - filledStarsCount - Number(hasHalfStar);

  return (
    <div className={cn('flex gap-1 fill-primary text-primary', className)}>
      {Array.from({ length: filledStarsCount }).map((_, index) => (
        <Star key={`filled_${index}`} className={cn('fill-current', starSize)} />
      ))}
      {hasHalfStar && (
        <Star className={cn(starSize)}>
          <StarHalf className={cn('fill-current', starSize)} />
        </Star>
      )}
      {Array.from({ length: emptyStarsCount }).map((_, index) => (
        <Star key={`empty_${index}`} className={cn(starSize)} />
      ))}
    </div>
  );
};

type SingleStarRatingProps = Required<Omit<StarRatingProps, 'variant'>>;

const SingleStarRating = (props: SingleStarRatingProps) => {
  const { className, rating, size } = props;

  const starSize = STAR_SIZES[size];

  return (
    <div className={cn('flex items-center gap-1 text-primary', className)}>
      <Star className={cn('fill-primary text-inherit', starSize)} fill="currentColor" />
      <span className="text-foreground font-semibold text-inherit">{rating.toFixed(1)}</span>
    </div>
  );
};
