import Image from 'next/image';

import { InlineBookingForm } from '@/features/booking';

import { Logo } from '@/shared/assets';
import { SECTION_IDS } from '@/shared/model';
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
    <Section className="relative flex min-h-screen overflow-hidden" id={SECTION_IDS.HOME_PROMO}>
      <BackgroundImage src={promoBackground} />
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
        <Image
          className="h-auto w-lg transition-all duration-450 ease-in-out hover:scale-105 hover:brightness-115 hover:saturate-150"
          src={Logo}
          priority
          alt="Логотип проекта «Мещане Таганрога»"
        />
      </Container>
    </Section>
  );
};
