import Image from 'next/image';

import { InlineBookingForm } from '@/features/booking';

import { Logo, promoBackground } from '@/shared/assets';
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
    <Section className="relative flex min-h-screen overflow-hidden" id="promo-section">
      <BackgroundImage className="scale-101 opacity-100 blur-xs" src={promoBackground} />
      <Container className="relative flex items-center justify-center gap-32">
        <div className="flex flex-col gap-12">
          <PageHeading className="text-start">
            <PageHeadingHighlight>Мещанский Таганрог:</PageHeadingHighlight>
            <PageHeadingCaption>Иммерсивные экскурсии</PageHeadingCaption>
          </PageHeading>
          <InlineBookingForm
            label="Записаться на экскурсию"
            buttonText="Заказать экскурсию"
            buttonTextWhite
          />
        </div>
        <Image className="size-128" src={Logo} priority alt="Логотип проекта «Мещане Таганрога»" />
      </Container>
    </Section>
  );
};
