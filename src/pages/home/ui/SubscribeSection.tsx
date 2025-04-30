import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { Heading, Subtitle, Title, HeadingHighlight } from '@/shared/ui/elements/Heading';
import { Input } from '@/shared/ui/common/Input';
import { Button } from '@/shared/ui/common/Button';

export const SubscribeSection = () => {
  return (
    <Section className="flex bg-background-primary">
      <Container className="items-start py-16">
        <div className="flex flex-col gap-16">
          <Heading>
            <Subtitle withoutLine>Будьте в курсе мещанских дел</Subtitle>
            <Title>
              <HeadingHighlight>Подпишитесь</HeadingHighlight> на наши новости
            </Title>
          </Heading>
          <div className="flex items-center grow gap-4">
            <Input className="basis-2/3 border border-border-primary" type="email" placeholder="Ваш e-mail" />
            <Button className="basis-1/3 text-foreground-primary">Подписаться</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
