import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { Heading, HeadingHighlight, Subtitle, Title } from '@/shared/ui/elements/Heading';
import { Review } from '@/entities/review/ui/Review';
import { User } from '@/shared/types/user';

const mockAuthors: User[] = [
  {
    id: 'u1',
    fullName: 'Алексей Иванов',
    email: 'alex.ivanov@example.com',
    role: 'admin',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'u2',
    fullName: 'Мария Петрова',
    email: 'maria.petrova@example.com',
    role: 'editor',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'u3',
    fullName: 'Дмитрий Соколов',
    email: 'dmitry.sokolov@example.com',
    role: 'viewer',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
  },
];

export const ReviewsSection = () => {
  return (
    <Section className="flex justify-center items-center bg-background-primary">
      <Container className="flex-col gap-16 py-16">
        <Heading>
          <Subtitle withoutLine>О нас говорят</Subtitle>
          <Title>
            <HeadingHighlight>Отзывы</HeadingHighlight> участников
          </Title>
        </Heading>
        <Review
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt corporis illo magnam cum maxime, laborum repellendus numquam delectus ducimus quae esse laudantium expedita voluptates atque sit optio ipsa corrupti!"
          author={mockAuthors[0]}
          rating={5}
        />
      </Container>
    </Section>
  );
};
