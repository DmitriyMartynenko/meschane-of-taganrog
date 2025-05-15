import Image from 'next/image';
import Link from 'next/link';

import { Section, Container, HeadingHighlight, HeadingTitle } from '@/shared/ui';

import partnersBackground from '../assets/images/partners-background.png';
import tgliamz from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section
      className="flex bg-neutral-900 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${partnersBackground.src})` }}
      id="partners-section"
    >
      <Container className="flex-col gap-16 py-16">
        <HeadingTitle>
          <HeadingHighlight>Наши партнеры</HeadingHighlight>
        </HeadingTitle>
        <div className="flex flex-col justify-center items-center grow gap-8">
          <Link href="https://tgliamz.ru/" target="_blank">
            <Image
              src={tgliamz}
              alt="Таганрогский государственный литературный и историко-архитектурный музей-заповедник"
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </Link>
          <Link
            className="font-bold text-2xl text-center text-foreground-secondary transition-colors duration-300 ease-in-out hover:text-accent-primary cursor-pointer"
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
