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
        <div className="flex grow flex-col items-center justify-center gap-8">
          <Link href="https://tgliamz.ru/" target="_blank">
            <Image
              src={tgliamz}
              alt="Таганрогский государственный литературный и историко-архитектурный музей-заповедник"
              className="cursor-pointer transition-transform duration-450 ease-in-out hover:scale-105"
            />
          </Link>
          <Link
            className="cursor-pointer text-center text-2xl font-bold text-foreground-secondary transition-colors duration-300 ease-in-out hover:text-accent-primary"
            href="https://tgliamz.ru/"
            target="_blank"
          >
            Таганрогский государственный литературный и историко-архитектурный музей-заповедник
          </Link>
        </div>
      </Container>
    </Section>
  );
};
