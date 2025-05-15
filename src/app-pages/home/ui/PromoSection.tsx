import Image from 'next/image';

import { InlineBookingForm } from '@/features/booking';
import { Logo } from '@/shared/assets';
import { Section, Container, HeadingHighlight } from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen bg-none overflow-hidden" id="promo-section">
      <div
        className="absolute inset-0 -m-2 bg-cover bg-center bg-no-repeat blur-xs opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(rgba(5,0,5,0.75),rgba(5,0,5,0.75)),
            url(${promoBackground.src})
          `,
        }}
      ></div>
      <Container className="relative gap-32">
        <div className="flex flex-col gap-12">
          <h1 className="font-chibola text-5xl/tight text-foreground-secondary text-shadow-promo-title">
            <HeadingHighlight className="text-[4rem]">Мещанский Таганрог:</HeadingHighlight>
            <br />
            Иммерсивные экскурсии
          </h1>
          <InlineBookingForm />
        </div>
        <div className="relative">
          <Image src={Logo} priority alt="Логотип проекта 'Мещане Таганрога'" />
        </div>
      </Container>
    </Section>
  );
};
