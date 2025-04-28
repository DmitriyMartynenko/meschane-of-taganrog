import { Star, StarHalf } from 'lucide-react'; // react-icons/fa :contentReference[oaicite:4]{index=4}

type StarRatingProps = {
  rating: number;           // дробный рейтинг, например 4.5
  totalStars?: number;      // макс. количество звёзд (по умолчанию 5)
  className?: string;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  className,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill('full'),
    ...(hasHalfStar ? ['half'] : []),
    ...Array(emptyStars).fill('empty'),
  ] as ('full' | 'half' | 'empty')[];

  return (
    <div className={className}>
      {stars.map((type, idx) => {
        if (type === 'full') return <Star key={idx} />;         // полная звезда
        if (type === 'half') return <StarHalf key={idx} />; // половинчатая :contentReference[oaicite:5]{index=5}
        return <StarHalf key={idx} />;                          // пустая звезда
      })}
    </div>
  );
};