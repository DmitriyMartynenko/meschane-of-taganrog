import { TourCard } from '@/features/tours/ui/TourCard';

const tours = [
  {
    title: 'Экскурсия по историческому центру',
    description: 'Уникальный маршрут по знаковым местам города.',
    imageUrl: '/images/tour1.jpg',
    date: '2025-05-01',
  },
  // Дополнительные туры...
];

export default function ToursPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour, idx) => (
        <TourCard key={idx} {...tour} />
      ))}
    </div>
  );
}
