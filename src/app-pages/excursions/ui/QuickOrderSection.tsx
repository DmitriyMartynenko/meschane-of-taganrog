import { InlineBookingForm } from '@/features/booking';

import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

export const QuickOrderSection = () => {
  return (
    <Section className="bg-background-primary" id={SECTION_IDS.EXCURSIONS_QUICK_ORDER}>
      <Container className="flex items-center justify-center py-16">
        <div className="flex flex-col items-center justify-center gap-16">
          <Heading>
            <HeadingSubtitle>Не нашли подходящую экскурсию?</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Оставьте заявку</HeadingHighlight> – мы подберём
            </HeadingTitle>
          </Heading>
          <InlineBookingForm inputBorder buttonText="Оставить заявку" />
        </div>
      </Container>
    </Section>
  );
};
