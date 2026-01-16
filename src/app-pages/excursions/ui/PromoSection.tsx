import { ExcursionFilter } from '@/features/excursion-filtering';

import { promoBackground } from '@/shared/assets';
import {
  BackgroundImage,
  Container,
  PageHeading,
  PageHeadingCaption,
  PageHeadingHighlight,
  Section,
} from '@/shared/ui';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden bg-none">
      <BackgroundImage className="scale-101 opacity-100 blur-xs" src={promoBackground} />
      <Container className="relative flex flex-col items-center justify-center gap-16 py-32">
        <PageHeading>
          <PageHeadingHighlight>Наши экскурсии —</PageHeadingHighlight>
          <PageHeadingCaption>Погружение в мещанский мир Таганрога</PageHeadingCaption>
        </PageHeading>
        <ExcursionFilter />
      </Container>
    </Section>
  );
};
