import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { Heading, Subtitle, Title, HeadingHighlight } from '@/shared/ui/elements/Heading';
import { Input } from '@/shared/ui/common/Input';
import { Button } from '@/shared/ui/common/Button';

export const SubscribeSection = () => {
  return (
    <Section className="flex min-h-[350px] bg-background-secondary">
      <Container className="items-start py-16">
        <div className="flex flex-col h-full">
          <Heading>
            <Subtitle withoutLine>Будьте в курсе мещанских дел</Subtitle>
            <Title>
              <HeadingHighlight>Подпишитесь</HeadingHighlight> на наши новости
            </Title>
          </Heading>
          <div className="flex items-center grow gap-4">
            <Input className="basis-2/3" type="email" placeholder="Ваш e-mail" />
            <Button className="basis-1/3 text-foreground-primary">Подписаться</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
