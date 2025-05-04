import { SubscriptionForm } from '@/features/subscription/ui/SubscriptionForm';
import {
  Section,
  Container,
  Heading,
  Subtitle,
  Title,
  HeadingHighlight,
  Input,
  Button,
} from '@/shared/ui';

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
          <SubscriptionForm />
        </div>
      </Container>
    </Section>
  );
};
