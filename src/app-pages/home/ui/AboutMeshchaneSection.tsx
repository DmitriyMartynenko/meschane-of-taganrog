import Image from 'next/image';

import { fadeIn, fadeLeft, fadeUp, staggerContainer, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
  MotionP,
  MotionSpan,
  Quotes,
  Section,
} from '@/shared/ui';

import aboutMeshchaneBackground from '../assets/images/about-meshchane-background.png';
import meshchaninPortrait from '../assets/images/meshchanin-portrait.png';
import signature from '../assets/images/signature.png';

export const AboutMeshchaneSection = () => {
  return (
    <Section
      className="relative flex scroll-mt-[15vh] gap-0 bg-background-secondary lg:max-h-175 xl:gap-16"
      id={SECTION_IDS.HOME_ABOUT_MESHCHANE}
    >
      <div className="pointer-events-none relative hidden min-w-0 shrink basis-[40%] overflow-hidden select-none xl:block">
        <Image
          className="size-full object-cover object-center"
          src={aboutMeshchaneBackground}
          alt=""
          priority
        />
        <div className="absolute inset-0 z-1 bg-linear-to-b from-[rgba(30,20,10,0.2)] to-[rgba(30,20,10,0.2)]" />
        <div className="absolute inset-y-0 right-0 z-2 w-8 bg-linear-to-l from-background-secondary to-transparent" />
      </div>
      <div className="flex grow justify-center gap-8 lg:shrink-0 xl:justify-start">
        <MotionDiv
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="z-10 hidden shrink-0 lg:block"
        >
          <Image
            src={meshchaninPortrait}
            alt="Портрет мещанина начала XX века в традиционной одежде"
            className="h-full w-auto origin-bottom scale-110 object-contain object-bottom transition-all duration-450 ease-in-out select-none hover:scale-111 hover:brightness-115"
            priority
          />
        </MotionDiv>
        <MotionDiv
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex w-full max-w-lg items-center px-6 py-12 text-foreground-primary lg:max-w-xl lg:py-24 lg:pr-12 lg:pl-0 xl:max-w-2xl"
        >
          <div className="flex w-full flex-col gap-8 text-center lg:gap-10 lg:text-start">
            <MotionDiv variants={fadeUp}>
              <Heading className="lg:items-start" variant="dark">
                <HeadingSubtitle withDash>Слово мещанину</HeadingSubtitle>
                <HeadingTitle className="relative lg:text-start">
                  Потому что нам <br />
                  <HeadingHighlight withUnderline>не все равно</HeadingHighlight>
                  <Quotes
                    className="absolute top-0 -right-32 hidden text-[200px] leading-none opacity-[0.03] lg:block"
                    side="right"
                  />
                </HeadingTitle>
              </Heading>
            </MotionDiv>
            <div className="flex flex-col gap-6 lg:gap-8">
              <MotionP variants={fadeUp} className="leading-relaxed tracking-widest">
                В 1910-е гг. возросла политическая активность мещан. Она проявилась в организации и
                проведении Всероссийских съездов представителей мещанских обществ, а также съездов
                мещанских делегатов в 1917 г. Это было свидетельством жизнеспособности сословия,
                готовности мещан к переменам и защите своих прав, причем они не боялись прибегать к
                активным политическим действиям.
              </MotionP>
              <MotionSpan variants={fadeIn} className="h-px w-full bg-border-primary" />
              <MotionDiv
                variants={fadeUp}
                className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8"
              >
                <div className="flex shrink-0 flex-col gap-1 lg:self-start">
                  <h3 className="text-lg">Смирнов Иван Николаевич</h3>
                  <p className="text-muted-primary lg:max-w-62.5">
                    Кандидат исторических наук, доцент
                  </p>
                </div>
                <div className="relative flex w-55 flex-col items-center gap-4 lg:flex-row">
                  <Image
                    className="h-auto w-32 opacity-30 transition-opacity duration-300 ease-in-out select-none hover:opacity-100"
                    src={signature}
                    alt="Подпись И.Н. Смирнова"
                  />
                  <span className="absolute bottom-0 left-[50%] text-[10px] tracking-[4px] text-muted-primary uppercase italic">
                    Архив, 1917
                  </span>
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
};
