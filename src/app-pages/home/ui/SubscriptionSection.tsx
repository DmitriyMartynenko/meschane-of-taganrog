import { InlineSubscriptionForm } from '@/features/subscription';
import { Section, Container, Heading, HeadingSubtitle, HeadingTitle, HeadingHighlight } from '@/shared/ui';

export const SubscriptionSection = () => {
  return (
    <Section className="flex bg-background-primary">
      <Container className="items-start py-16">
        <div className="flex flex-col gap-16">
          <Heading>
            <HeadingSubtitle withoutLine>Будьте в курсе мещанских дел</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Подпишитесь</HeadingHighlight> на наши новости
            </HeadingTitle>
          </Heading>
          <InlineSubscriptionForm />
        </div>
      </Container>
    </Section>
  );
};
