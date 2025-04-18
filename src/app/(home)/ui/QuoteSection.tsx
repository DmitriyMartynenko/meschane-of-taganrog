import Image from 'next/image';

import { Section } from '@/shared/ui/elements/Section';
import {
  SectionHeading,
  SectionHeadingHighlight,
  SectionSubtitle,
  SectionTitle,
} from '@/shared/ui/elements/SectionHeading';

import stoneStairImg from '@/shared/assets/images/stone-stair.png';
import meschaninImg from '@/shared/assets/images/meschanin.png';
import quotes from '@/shared/assets/icons/quotes.svg';

export const QuoteSection = () => {
  return (
    <Section className="flex h-[75vh] bg-background-secondary">
      <div className="relative basis-[30%]">
        <Image src={stoneStairImg} alt="Каменная лестница Таганрога" fill />
      </div>
      <div className="relative basis-[30%]">
        <Image
          src={meschaninImg}
          alt="Мещанин"
          className="absolute bottom-[7%] w-full h-full transform scale-125"
        />
        <Image src={quotes} alt="Кавычки" className="absolute top-[60%] right-0" />
      </div>
      <div className="relative basis-auto"></div>
      <div className="flex flex-col justify-center basis-[40%] gap-4 px-16">
        <SectionHeading className="border-b-2 border-b-secondary">
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
        <div className="mt-4">
          <h3 className="font-medium text-lg uppercase">Смирнов Иван Николаевич</h3>
          <span className="text-foreground-muted">Кандидат исторических наук, доцент</span>
        </div>
      </div>
    </Section>
  );
};
