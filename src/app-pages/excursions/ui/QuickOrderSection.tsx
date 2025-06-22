import { InlineBookingForm } from '@/features/booking';
import {
  Container,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
  SectionHeading,
} from '@/shared/ui';

export const QuickOrderSection = () => {
  return (
    <Section id="quick-order-section">
      <Container className="py-16">
        <div className="flex flex-col items-center justify-center gap-16">
          <SectionHeading>
            <HeadingSubtitle>Не нашли подходящую экскурсию?</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Оставьте заявку</HeadingHighlight> – мы подберём
            </HeadingTitle>
          </SectionHeading>
          <InlineBookingForm inputBorder buttonText="Оставить заявку" />
        </div>
      </Container>
    </Section>
  );
};
