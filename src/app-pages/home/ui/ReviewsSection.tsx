import { ReviewCarousel } from '@/entities/review';
import { type User } from '@/entities/user';
import {
  Container,
  SectionHeading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

const mockAuthors: User[] = [
  {
    id: 'u1',
    fullName: 'Юлия Воробьева',
    email: 'alex.ivanov@example.com',
    role: 'admin',
    jobTitle: 'Директор компании “Воробьева и ко”',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'u2',
    fullName: 'Алексей Иванов',
    email: 'maria.petrova@example.com',
    role: 'guide',
    jobTitle: '',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 'u3',
    fullName: '',
    email: 'dmitry.sokolov@example.com',
    role: 'user',
    jobTitle: 'Стажёр отдела маркетинга',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },
];

const mockReviews = [
  {
    id: '1',
    author: mockAuthors[0],
    text: 'Я обеспечу представление Ваших интересов в судах общей юрисдикции, арбитраже, третейском суде, приму участие в переговорах, окажу помощь на стадии досудебного урегулирования споров.',
    rating: 5,
  },
  {
    id: '2',
    author: mockAuthors[1],
    text: 'Хороший сервис, но есть мелкие задержки с обратной связью.',
    rating: 4.5,
  },
  {
    id: '3',
    author: mockAuthors[2],
    text: 'В целом неплохо, но хотелось бы более быстрых ответов от поддержки.',
    rating: 4,
  },
];

export const ReviewsSection = () => {
  return (
    <Section className="flex justify-center items-center bg-background-secondary">
      <Container className="flex-col gap-12 py-16">
        <SectionHeading>
          <HeadingSubtitle>О нас говорят</HeadingSubtitle>
          <HeadingTitle>
            <HeadingHighlight>Отзывы</HeadingHighlight> участников
          </HeadingTitle>
        </SectionHeading>
        <ReviewCarousel className="max-w-5xl" reviews={mockReviews} />
      </Container>
    </Section>
  );
};
