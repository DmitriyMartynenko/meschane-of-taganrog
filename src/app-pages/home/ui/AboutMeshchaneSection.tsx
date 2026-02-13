import Image from 'next/image';

import { SECTION_IDS } from '@/shared/model';
import {
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Quotes,
  Section,
} from '@/shared/ui';

import aboutMeshchaneBackground from '../assets/images/about-meshchane-background.png';
import meshchaninPortrait from '../assets/images/meshchanin-portrait.png';
import signature from '../assets/images/signature.png';

export const AboutMeshchaneSection = () => {
  return (
    <Section
      className="relative flex max-h-175 gap-16 bg-background-secondary"
      id={SECTION_IDS.HOME_ABOUT_MESHCHANE}
    >
      <div className="pointer-events-none relative shrink basis-[40%] select-none">
        <Image
          className="size-full object-cover object-center"
          src={aboutMeshchaneBackground}
          alt=""
          priority
        />
        <div className="fill absolute inset-0 z-1 bg-linear-to-b from-[rgba(30,20,10,0.2)] to-[rgba(30,20,10,0.2)]" />
        <div className="absolute inset-y-0 right-0 z-2 w-32 bg-linear-to-l from-background-secondary to-transparent" />
      </div>
      <div className="flex shrink-0 grow gap-8">
        <Image
          src={meshchaninPortrait}
          alt="Портрет мещанина начала XX века в традиционной одежде"
          className="h-full w-auto origin-bottom scale-110 object-contain object-bottom transition-all duration-450 ease-in-out select-none hover:scale-115 hover:brightness-115"
          priority
        />
        <div className="relative my-16 mr-8 flex max-w-2xl items-center gap-6 text-foreground-primary">
          <Quotes
            className="absolute top-12 right-24 block text-[200px] leading-none opacity-[0.03]"
            side="right"
          />
          <div className="flex flex-col gap-8">
            <Heading variant="dark">
              <HeadingSubtitle withDash>Слово мещанину</HeadingSubtitle>
              <HeadingTitle>
                Потому что нам <br />
                <HeadingHighlight withUnderline>не все равно</HeadingHighlight>
              </HeadingTitle>
            </Heading>
            <p className="leading-relaxed tracking-widest">
              В 1910-е гг. возросла политическая активность мещан. Она проявилась в организации и
              проведении Всероссийских съездов представителей мещанских обществ, а также съездов
              мещанских делегатов в 1917 г. Это было свидетельством жизнеспособности сословия,
              готовности мещан к переменам и защите своих прав, причем они не боялись прибегать к
              активным политическим действиям.
            </p>
            <span className="h-px w-full bg-muted-primary/50" />
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium uppercase">Смирнов Иван Николаевич</h3>
                <p className="max-w-62.5 text-muted-primary">Кандидат исторических наук, доцент</p>
              </div>
              <div className="flex">
                <Image
                  className="h-auto w-32 opacity-30 transition-opacity duration-300 ease-in-out select-none hover:opacity-100"
                  src={signature}
                  alt="Подпись И.Н. Смирнова"
                />
                <span className="self-end text-[10px] tracking-[4px] text-muted-primary uppercase italic">
                  Архив, 1917
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
