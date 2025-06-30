import Image from 'next/image';
import Link from 'next/link';

import { Container, HeadingHighlight, HeadingTitle, Section } from '@/shared/ui';

import partnersBackground from '../assets/images/partners-background.png';
import tgliamz from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section
      className="flex bg-neutral-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${partnersBackground.src})` }}
      id="partners-section"
    >
      <Container className="flex-col gap-16 py-16">
        <HeadingTitle>
          <HeadingHighlight>Наши партнеры</HeadingHighlight>
        </HeadingTitle>
        <div className="flex grow flex-col items-center justify-center gap-8">
          <Link href="https://tgliamz.ru/" target="_blank">
            <Image
              src={tgliamz}
              alt="Таганрогский государственный литературный и историко-архитектурный музей-заповедник"
              className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105"
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
