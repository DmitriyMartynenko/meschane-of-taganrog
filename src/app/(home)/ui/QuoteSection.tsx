import Image from 'next/image';

import stoneStairImg from '@/shared/assets/images/stone-stair.png';
import meschanin from '@/shared/assets/icons/meschanin.svg';
import quotes from '@/shared/assets/icons/quotes.svg';
import {
  SectionHeading,
  SectionHeadingHighlight,
  SectionSubtitle,
  SectionTitle,
} from '@/shared/ui/elements/SectionHeading';

export const QuoteSection = () => {
  return (
    <section className="flex w-full min-h-[700px] bg-background-secondary">
      <div className="relative basis-[30%] bg-amber-100">
        <Image src={stoneStairImg} fill alt="Каменная лестница Таганрога" />
      </div>
      <div className="relative basis-[30%] bg-amber-200">
        <Image src={meschanin} alt="Мещанин" className="absolute -top-[10%] transform scale-125" />
        <Image src={quotes} alt="Кавычки" className="absolute top-[50%] right-0" />
      </div>
      <div className="relative basis-auto">
      </div>
      <div className="flex flex-col justify-center basis-[40%] gap-4 px-16 bg-amber-400">
        <SectionHeading className="border-b border-b-secondary">
          <SectionSubtitle>Слово мещанину</SectionSubtitle>
          <SectionTitle>
            Потому что нам <br />
            <SectionHeadingHighlight>не все равно</SectionHeadingHighlight>
          </SectionTitle>
        </SectionHeading>
        <p className="tracking-[1px]">
          В 1910-е гг. возросла политическая активность мещан. Она проявилась в организации и
          проведении Всероссийских съездов представителей мещанских обществ, а также съездов
          мещанских делегатов в 1917 г. Это было свидетельством жизнеспособности сословия,
          готовности мещан к переменам и защите своих прав, причем они не боялись прибегать к
          активным политическим действиям
        </p>
      </div>
    </section>
  );
};
