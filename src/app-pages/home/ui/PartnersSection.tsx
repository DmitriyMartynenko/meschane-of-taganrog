import Image from 'next/image';
import Link from 'next/link';

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

import partnersBackground from '../assets/images/partners-background.png';
import tgliamz from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section className="relative flex" id={SECTION_IDS.HOME_PARTNERS}>
      <BackgroundImage src={partnersBackground} />
      <Container className="relative flex flex-col items-center justify-center gap-16 py-16">
        <Heading variant="light">
          <HeadingSubtitle>С нами сотрудничают</HeadingSubtitle>
          <HeadingTitle>
            Наши
            <HeadingHighlight> партнеры</HeadingHighlight>
          </HeadingTitle>
        </Heading>
        <Link
          href="https://tgliamz.ru/"
          target="_blank"
          className="group flex flex-col items-center gap-8 outline-hidden"
        >
          <Image
            className="transition-transform duration-450 ease-in-out group-hover:-translate-y-2"
            src={tgliamz}
            alt="ТГЛИАМЗ"
          />
          <span className="relative pb-1 text-center text-2xl font-bold text-foreground-secondary transition-colors duration-450 ease-in-out group-hover:text-accent-primary">
            Таганрогский государственный литературный и историко-архитектурный музей-заповедник
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-accent-primary transition-transform duration-450 ease-in-out group-hover:scale-x-100" />
          </span>
        </Link>
      </Container>
    </Section>
  );
};
