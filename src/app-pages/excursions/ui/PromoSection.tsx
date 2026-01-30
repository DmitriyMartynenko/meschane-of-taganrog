import { ExcursionFilter } from '@/features/excursion-filtering';

import {
  BackgroundImage,
  Container,
  PageHeading,
  PageHeadingCaption,
  PageHeadingHighlight,
  Section,
} from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden">
      <BackgroundImage src={promoBackground} />
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
