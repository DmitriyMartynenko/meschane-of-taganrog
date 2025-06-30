import { ExcursionFilter } from '@/features/excursion-filtering';
import { Container, PageHeading, Section } from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden bg-none">
      <div
        className="absolute inset-0 -m-2 bg-cover bg-center bg-no-repeat opacity-90 blur-xs"
        style={{
          backgroundImage: `
            linear-gradient(rgba(5,0,5,0.75),rgba(5,0,5,0.75)),
            url(${promoBackground.src})
          `,
        }}
      />
      <Container className="relative flex-col gap-16 py-32">
        <PageHeading highlight="Наши экскурсии —" caption="Погружение в мещанский мир Таганрога" />
        <ExcursionFilter />
      </Container>
    </Section>
  );
};
