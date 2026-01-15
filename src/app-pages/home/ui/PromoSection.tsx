import Image from 'next/image';

import { InlineBookingForm } from '@/features/booking';

import { Logo } from '@/shared/assets';
import { BackgroundImage, Container, PageHeading, Section } from '@/shared/ui';

import promoBackground from '../assets/images/promo-background-high-quality.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden bg-none" id="promo-section">
      <BackgroundImage src={promoBackground} />
      <Container className="relative gap-32 pt-16">
        <div className="flex flex-col gap-12">
          <PageHeading
            className="text-start"
            highlight="Мещанский Таганрог:"
            caption="Иммерсивные экскурсии"
          />
          <InlineBookingForm
            label="Записаться на экскурсию"
            buttonText="Заказать экскурсию"
            buttonTextWhite
          />
        </div>
        <div className="relative">
          <Image src={Logo} priority alt="Логотип проекта 'Мещане Таганрога'" />
        </div>
      </Container>
    </Section>
  );
};
