import Image from 'next/image';

import { Quotes } from '@/shared/assets';
import {
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
  SectionHeading,
} from '@/shared/ui';

import meschanin from '../assets/images/meschanin.png';
import stoneStair from '../assets/images/stone-stair.png';

export const QuoteSection = () => {
  return (
    <Section className="flex bg-background-secondary">
      <div className="relative basis-[30%]">
        <Image className="h-full w-full" src={stoneStair} alt="Каменная лестница Таганрога" />
      </div>
      <div className="relative basis-[25%]">
        <Image
          className="absolute bottom-[7%] h-full w-auto scale-125 transform"
          src={meschanin}
          alt="Мещанин"
          id="quote-section"
        />
        <Image className="absolute top-[50%] right-0" src={Quotes} alt="Кавычки" />
      </div>
      <div className="flex max-w-[700px] flex-col justify-center gap-4 px-16">
        <SectionHeading>
          <HeadingSubtitle withDash>Слово мещанину</HeadingSubtitle>
          <HeadingTitle>
            Потому что нам <br />
            <HeadingHighlight withUnderline>не все равно</HeadingHighlight>
          </HeadingTitle>
        </SectionHeading>
        <p className="tracking-[1px]">
          В 1910-е гг. возросла политическая активность мещан. Она проявилась в организации и
          проведении Всероссийских съездов представителей мещанских обществ, а также съездов
          мещанских делегатов в 1917 г. Это было свидетельством жизнеспособности сословия,
          готовности мещан к переменам и защите своих прав, причем они не боялись прибегать к
          активным политическим действиям
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-medium uppercase">Смирнов Иван Николаевич</h3>
          <span className="text-foreground-muted">Кандидат исторических наук, доцент</span>
        </div>
      </div>
    </Section>
  );
};
