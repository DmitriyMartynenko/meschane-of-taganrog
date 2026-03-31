import { ExcursionFilter } from '@/widgets/excursion-filter';

import { ease, fadeIn, fadeUp, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  BackgroundImage,
  Container,
  MotionDiv,
  MotionP,
  PageHeading,
  PageHeadingCaption,
  PageHeadingHighlight,
  Section,
} from '@/shared/ui';

import promoBackground from '../assets/filter-section-background.png';

export const FilterSection = () => {
  return (
    <Section
      className="relative flex min-h-screen overflow-hidden"
      id={SECTION_IDS.EXCURSIONS_FILTER}
    >
      <BackgroundImage src={promoBackground} />
      <Container className="relative flex flex-col items-center justify-center gap-6 px-6 py-32 lg:gap-8 lg:px-8">
        <div className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <MotionDiv
            className="flex items-center gap-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-center text-xs leading-relaxed tracking-[0.3em] text-secondary/80 uppercase">
              Иммерсивные экскурсии · Таганрог
            </span>
            <span className="h-px w-8 bg-primary/60" />
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            <PageHeading>
              <PageHeadingHighlight>Наши экскурсии —</PageHeadingHighlight>
              <PageHeadingCaption>Погружение в мещанский мир Таганрога</PageHeadingCaption>
            </PageHeading>
          </MotionDiv>
        </div>
        <MotionP
          className="max-w-xl text-center font-alegreya text-xl tracking-widest text-foreground-secondary italic"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.48, ease }}
        >
          Подберите экскурсию, подходящую именно Вам.
        </MotionP>
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.6, ease }}
        >
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <ExcursionFilter />
          </MotionDiv>
        </MotionDiv>
      </Container>
    </Section>
  );
};
