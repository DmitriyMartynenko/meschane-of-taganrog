import { InlineSubscriptionForm } from '@/features/subscription';
import {
  Container,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
  SectionHeading,
} from '@/shared/ui';

export const SubscriptionSection = () => {
  return (
    <Section className="flex bg-background-primary">
      <Container className="items-start py-16">
        <div className="flex flex-col gap-16">
          <SectionHeading>
            <HeadingSubtitle>Будьте в курсе мещанских дел</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Подпишитесь</HeadingHighlight> на наши новости
            </HeadingTitle>
          </SectionHeading>
          <InlineSubscriptionForm />
        </div>
      </Container>
    </Section>
  );
};
