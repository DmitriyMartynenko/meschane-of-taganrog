import Image from 'next/image';

import { Quotes } from '@/shared/assets';
import { SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

import quoteBackground from '../assets/images/about-meshchane-background.png';
import meshchaninPortrait from '../assets/images/meshchanin-portrait.png';
import signature from '../assets/images/signature.png';

export const AboutMeshchaneSection = () => {
  return (
    <Section className="relative" id={SECTION_IDS.HOME_ABOUT_MESHCHANE}>
      <BackgroundImage src={quoteBackground} />
      <Container className="relative flex items-center justify-center">
        <div className="absolute bottom-0 left-1/2 h-full -translate-x-full -translate-y-[5%]">
          <Image
            className="h-full w-auto scale-110 transition-all duration-450 ease-in-out hover:scale-115 hover:brightness-115"
            src={meshchaninPortrait}
            alt="Портрет мещанина начала XX века в традиционной одежде"
            priority
          />
        </div>
        <div className="relative my-16 ml-[50%] flex max-w-2xl items-center gap-6 border-l-4 border-secondary bg-black/25 p-8 pl-6 text-foreground-secondary backdrop-blur-sm">
          <Image className="size-8 shrink-0 opacity-50" src={Quotes} alt="Кавычки" />
          <div className="flex flex-col gap-8">
            <Heading variant="light">
              <HeadingSubtitle withDash>Слово мещанину</HeadingSubtitle>
              <HeadingTitle>
                Потому что нам <br />
                <HeadingHighlight withUnderline>не все равно</HeadingHighlight>
              </HeadingTitle>
            </Heading>
            <p className="leading-relaxed tracking-[1px]">
              В 1910-е гг. возросла политическая активность мещан. Она проявилась в организации и
              проведении Всероссийских съездов представителей мещанских обществ, а также съездов
              мещанских делегатов в 1917 г. Это было свидетельством жизнеспособности сословия,
              готовности мещан к переменам и защите своих прав, причем они не боялись прибегать к
              активным политическим действиям.
            </p>
            <div className="flex gap-8">
              <div>
                <h3 className="text-lg font-medium uppercase">Смирнов Иван Николаевич</h3>
                <p className="max-w-62.5 text-muted-primary">Кандидат исторических наук, доцент</p>
              </div>
              <Image
                className="h-auto w-32 shrink-0 opacity-60"
                src={signature}
                alt="Подпись И.Н. Смирнова"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
