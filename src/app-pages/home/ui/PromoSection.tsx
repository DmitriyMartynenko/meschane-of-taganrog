import Image from 'next/image';
import { MoveRight } from 'lucide-react';

import { NavLink } from '@/widgets/header';

import { BookingTrigger, InlineBookingForm } from '@/features/booking';

import { Logo } from '@/shared/assets';
import { cn, ease, fadeIn, fadeLeft, fadeUp } from '@/shared/lib';
import { PAGES, SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Button,
  Container,
  MotionButton,
  MotionDiv,
  MotionP,
  PageHeading,
  PageHeadingCaption,
  PageHeadingHighlight,
  Section,
} from '@/shared/ui';

import promoBackground from '../assets/images/promo-background.png';

const STATS = [
  { value: '8', label: 'уникальных маршрутов' },
  { value: '125', label: 'лет истории города' },
  { value: 'ТГЛИАМЗ', label: 'официальный партнёр' },
];

export const PromoSection = () => {
  return (
    <Section className="relative flex min-h-screen overflow-hidden" id={SECTION_IDS.HOME_PROMO}>
      <BackgroundImage src={promoBackground} />
      <Container className="relative flex items-center justify-center gap-8 px-6 pb-12 lg:px-8 lg:pb-16 xl:gap-16 2xl:gap-24">
        <div className="flex flex-col items-center gap-6 lg:gap-8 xl:items-start">
          <div className="flex flex-col gap-2 lg:gap-4">
            <MotionDiv
              className="hidden items-center gap-4 self-center pl-0 text-center xs:flex xl:flex xl:self-start"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.2, ease }}
            >
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs leading-relaxed tracking-[0.3em] text-secondary/80 uppercase">
                Таганрог · XIX–XX век
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </MotionDiv>
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, delay: 0.35, ease }}
            >
              <PageHeading className="text-center text-wrap xl:text-start">
                <PageHeadingHighlight>Мещанский Таганрог:</PageHeadingHighlight>
                <PageHeadingCaption>Иммерсивные экскурсии</PageHeadingCaption>
              </PageHeading>
            </MotionDiv>
          </div>
          <MotionP
            className="w-full text-center font-alegreya text-xl tracking-widest text-foreground-secondary italic xl:text-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.48, ease }}
          >
            Живая история города через судьбы реальных людей.
          </MotionP>
          <MotionDiv
            className="w-full max-w-100 xl:max-w-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.58, ease }}
          >
            <InlineBookingForm
              className="hidden w-full text-center xl:flex xl:text-start"
              label="Записаться на экскурсию"
              buttonText="Записаться"
              buttonLightText
            />
            <BookingTrigger className="px-0 text-base xl:hidden">
              Записаться на экскурсию
            </BookingTrigger>
          </MotionDiv>
          <MotionDiv
            className="flex justify-start xl:-mt-2 xl:max-w-xl"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            <Button className="border-none p-0 text-base xl:text-base" variant="ghost" lightText>
              <NavLink
                href={`${PAGES.EXCURSIONS}`}
                className="group relative flex items-center gap-2.5"
              >
                Все экскурсии
                <MoveRight
                  strokeWidth={2}
                  className="absolute top-1/2 left-full ml-2 size-5 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                />
              </NavLink>
            </Button>
          </MotionDiv>
        </div>
        <MotionDiv
          className="hidden lg:block"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.65, ease }}
        >
          <Image
            className="h-auto w-md transition-all duration-450 ease-in-out select-none hover:scale-105 hover:brightness-115 hover:saturate-150 xl:w-lg"
            src={Logo}
            priority
            alt="Логотип проекта «Мещане Таганрога»"
            loading="eager"
          />
        </MotionDiv>
        <MotionButton
          aria-label="Прокрутить вниз"
          className="absolute bottom-50 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer xl:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
        >
          <NavLink
            className="group flex flex-col items-center gap-2"
            href={`/#${SECTION_IDS.HOME_ABOUT_MESHCHANE}`}
          >
            <span className="text-[10px] tracking-[0.25em] text-secondary/60 uppercase transition-colors duration-300 ease-in-out group-hover:text-secondary">
              Узнать больше
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-secondary/40 pt-1.5 transition-colors duration-300 ease-in-out group-hover:border-secondary">
              <div className="scroll-indicator-dot h-1.5 w-1.5 rounded-full bg-secondary" />
            </div>
          </NavLink>
        </MotionButton>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-linear-to-t from-[rgba(30,20,10,0.85)] to-transparent xs:h-40 xl:h-64" />
      <MotionDiv
        className="absolute inset-x-0 bottom-0 z-20 lg:bottom-20"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease }}
      >
        <div
          className={cn(
            'mx-auto flex max-w-7xl items-stretch justify-center divide-x divide-white/10 border-t border-border-primary/10 backdrop-blur-sm lg:gap-0 lg:divide-x-0 lg:border-t-0 lg:backdrop-blur-none'
          )}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 px-3 py-4 text-center transition-colors duration-300 hover:bg-white/4 lg:w-64 lg:flex-none',
                i < STATS.length - 1 && 'lg:border-r lg:border-border-primary/10'
              )}
            >
              <span className="font-chibola text-xl text-secondary xs:text-2xl lg:text-2xl">
                {stat.value}
              </span>
              <span className="text-[8px] leading-4 tracking-[0.2em] text-muted-primary uppercase xs:text-[10px] lg:text-[10px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
};
