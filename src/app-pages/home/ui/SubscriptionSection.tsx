import { InlineSubscriptionForm } from '@/features/subscription';

import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

export const SubscriptionSection = () => {
  return (
    <Section className="flex bg-background-primary" id={SECTION_IDS.HOME_SUBSCRIPTION}>
      <Container className="flex items-start justify-center py-16">
        <div className="flex flex-col gap-16">
          <Heading>
            <HeadingSubtitle>Будьте в курсе мещанских дел</HeadingSubtitle>
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
