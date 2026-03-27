import { ReviewCarousel } from '@/entities/review';
import { type User } from '@/entities/user';

import { fadeUp, staggerContainer, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
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
    text: 'Отличный сервис, позволяющий записаться на понравившуюся экскурсию и погрузиться в атмосферу города! Очень удобно и просто в использовании!',
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
    <Section
      className="flex items-center justify-center bg-background-secondary"
      id={SECTION_IDS.HOME_REVIEWS}
    >
      <Container className="px-6 py-12 lg:px-8 lg:py-16">
        <MotionDiv
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex w-full flex-col items-center gap-6 lg:gap-8"
        >
          <MotionDiv variants={fadeUp}>
            <Heading>
              <HeadingSubtitle>О нас говорят</HeadingSubtitle>
              <HeadingTitle>
                <HeadingHighlight>Отзывы</HeadingHighlight> участников
              </HeadingTitle>
            </Heading>
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <ReviewCarousel
              className="max-w-70 lg:max-w-212.5 xl:max-w-5xl"
              reviews={mockReviews}
            />
          </MotionDiv>
        </MotionDiv>
      </Container>
    </Section>
  );
};
