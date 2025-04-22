import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { Heading, HeadingHighlight, Subtitle, Title } from '@/shared/ui/elements/Heading';

export const ReviewsSection = () => {
  return (
    <Section className="flex bg-background-primary">
      <Container className="flex-col py-16">
        <Heading>
          <Subtitle withoutLine>О нас говорят</Subtitle>
          <Title>
            <HeadingHighlight>Отзывы</HeadingHighlight> участников
          </Title>
        </Heading>
        <div className="flex justify-center items-center grow">
          <p className="text-2xl text-foreground-muted">Скоро здесь появятся отзывы</p>
        </div>
      </Container>
    </Section>
  );
};
