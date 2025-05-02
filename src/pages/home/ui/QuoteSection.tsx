import Image from 'next/image';

import { Quotes } from '@/shared/assets';
import { Section, Heading, HeadingHighlight, Subtitle, Title } from '@/shared/ui';

import StoneStair from '../assets/images/stone-stair.png';
import Meschanin from '../assets/images/meschanin.png';

export const QuoteSection = () => {
  return (
    <Section className="flex bg-background-secondary" id="quote-section">
      <div className="relative basis-[30%]">
        <Image src={StoneStair} alt="Каменная лестница Таганрога" className="w-full h-full" />
      </div>
      <div className="relative basis-[25%]">
        <Image
          src={Meschanin}
          alt="Мещанин"
          className="absolute bottom-[7%] w-auto h-full transform scale-125"
        />
        <Image src={Quotes} alt="Кавычки" className="absolute top-[50%] right-0" />
      </div>
      <div className="flex flex-col justify-center  gap-4 max-w-[700px] px-16">
        <Heading className="border-b-2 border-b-secondary">
          <Subtitle>Слово мещанину</Subtitle>
          <Title>
            Потому что нам <br />
            <HeadingHighlight>не все равно</HeadingHighlight>
          </Title>
        </Heading>
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
