import Image from 'next/image';

import { InlineBookingForm } from '@/features/booking';
import { Logo } from '@/shared/assets';
import { Container, PageHeading, Section } from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden bg-none" id="promo-section">
      <div
        className="absolute inset-0 -m-2 bg-cover bg-center bg-no-repeat opacity-90 blur-xs"
        style={{
          backgroundImage: `
            linear-gradient(rgba(5,0,5,0.75),rgba(5,0,5,0.75)),
            url(${promoBackground.src})
          `,
        }}
      />
      <Container className="relative gap-32">
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
