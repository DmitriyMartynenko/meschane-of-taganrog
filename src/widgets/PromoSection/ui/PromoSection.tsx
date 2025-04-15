import Image from 'next/image';

import { BookingForm } from '@/widgets/BookingForm/ui/BookingForm';

import logo from '../../../shared/assets/icons/logo.svg';

export const PromoSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -m-2 bg-promo-background-image bg-cover bg-center bg-no-repeat blur-xs opacity-90"></div>
      <div className="relative flex justify-center items-center container h-full mx-auto gap-32">
        <div className="flex flex-col gap-12">
          <h1 className="font-chibola font-extrabold text-5xl text-foreground-secondary">
            Мещанский Таганрог:
            <br />
            Иммерсивные экскурсии
          </h1>
          <BookingForm />
        </div>
        <div className="relative">
          <Image src={logo} alt="Логотип проекта 'Мещане Таганрога'" />
        </div>
      </div>
    </section>
  );
};
