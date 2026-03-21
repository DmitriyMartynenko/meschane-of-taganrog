import Image from 'next/image';
import Link from 'next/link';

import { fadeUp, scaleIn, staggerContainer, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Button,
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
  MotionP,
  Section,
} from '@/shared/ui';

import partnersBackground from '../assets/images/partners-background.png';
import tgliamzMobile from '../assets/images/tgliamz-mobile.png';
import tgliamz from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section className="relative flex" id={SECTION_IDS.HOME_PARTNERS}>
      <BackgroundImage src={partnersBackground} />
      <Container className="relative flex flex-col items-center justify-center gap-16 px-5 py-12 lg:px-12 lg:py-16 xl:px-0">
        <MotionDiv
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex w-full flex-col items-center gap-6 lg:gap-8"
        >
          <MotionDiv variants={fadeUp}>
            <Heading variant="light">
              <HeadingSubtitle>С нами сотрудничают</HeadingSubtitle>
              <HeadingTitle>
                Наши
                <HeadingHighlight> партнеры</HeadingHighlight>
              </HeadingTitle>
            </Heading>
          </MotionDiv>
          <MotionP
            variants={fadeUp}
            className="flex w-full max-w-2xl flex-col gap-1 text-center leading-relaxed tracking-wide text-foreground-secondary"
          >
            <span>ТГЛИАМЗ – один из крупнейших музеев юга России.</span>
            <span>
              Хранит более 200 000 предметов, документов и фотографий, связанных с историей
              Таганрога и его жителей.
            </span>
            <span>Основан в 1898 году.</span>
          </MotionP>
          <MotionDiv variants={scaleIn}>
            <Link
              href="https://tgliamz.ru/"
              target="_blank"
              className="group flex flex-col items-center gap-4 outline-hidden lg:gap-6"
            >
              <Image
                className="hidden transition-transform duration-450 ease-in-out select-none group-hover:-translate-y-2 lg:block"
                src={tgliamz}
                alt="ТГЛИАМЗ"
              />
              <Image
                className="transition-transform duration-300 ease-out select-none active:scale-95 lg:hidden"
                src={tgliamzMobile}
                alt="ТГЛИАМЗ"
                priority
              />
              <Button
                className="relative p-0 pb-1 text-lg normal-case group-hover:text-accent-primary lg:text-2xl lg:group-active:text-accent-primary/80"
                variant="ghost"
                lightText
              >
                Таганрогский государственный литературный и историко-архитектурный музей-заповедник
                <span className="absolute bottom-0 left-0 hidden h-0.5 w-full origin-center scale-x-0 bg-accent-primary transition-transform duration-450 ease-in-out group-hover:scale-x-100 lg:inline" />
              </Button>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </Section>
  );
};
