import Image from 'next/image';

import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { BookingForm } from '@/features/booking-form';
import { HeadingHighlight } from '@/shared/ui/elements/Heading';

import logo from '@/shared/assets/icons/logo.svg';

export const PromoSection = () => {
  return (
    <Section className="relative flex h-screen bg-none overflow-hidden">
      <div className="absolute inset-0 -m-2 bg-promo-background-image bg-cover bg-center bg-no-repeat blur-xs opacity-90"></div>
      <Container className="relative gap-32">
        <div className="flex flex-col gap-12">
          <h1 className="font-chibola text-5xl/tight text-foreground-secondary text-shadow-promo-title">
            <HeadingHighlight className="text-[4rem]">Мещанский Таганрог:</HeadingHighlight>
            <br />
            Иммерсивные экскурсии
          </h1>
          <BookingForm />
        </div>
        <div className="relative">
          <Image src={logo} priority alt="Логотип проекта 'Мещане Таганрога'" />
        </div>
      </Container>
    </Section>
  );
};
