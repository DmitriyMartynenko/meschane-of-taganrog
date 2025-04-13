import Image from 'next/image';

import { BookingForm } from '@/widgets/BookingForm/ui/BookingForm';

import logo from '../../../shared/assets/icons/logo.svg';

export const PromoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -m-2 bg-promo-background-image bg-cover bg-center bg-no-repeat blur-xs opacity-90"></div>
      <div className="relative flex justify-center items-center w-full h-full gap-32">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-extrabold font-chibola text-white mb-6">
            Мещанский Таганрог:<br />Иммерсивные экскурсии
          </h1>
          <BookingForm />
        </div>
        <div>
          <Image
            src={logo}
            alt="Логотип проекта 'Мещане Таганрога'"
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  );
};
