import { ExcursionFilter } from '@/features/excursion-filtering';

import { BackgroundImage, Container, PageHeading, Section } from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden bg-none">
      <BackgroundImage src={promoBackground} />
      <Container className="relative flex-col gap-16 py-32">
        <PageHeading highlight="Наши экскурсии —" caption="Погружение в мещанский мир Таганрога" />
        <ExcursionFilter />
      </Container>
    </Section>
  );
};
