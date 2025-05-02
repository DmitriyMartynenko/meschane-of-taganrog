import Image from 'next/image';

import { Section, Container, HeadingHighlight, Title } from '@/shared/ui';

import TGLIAMZ from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section
      className="flex bg-[url(@/pages/home/assets/images/parthers-background.png)] bg-neutral-900 bg-center bg-no-repeat  bg-cover"
      id="partners-section"
    >
      <Container className="flex-col gap-16 py-16">
        <Title>
          <HeadingHighlight>Наши партнеры</HeadingHighlight>
        </Title>
        <div className="flex flex-col justify-center items-center grow gap-8">
          <Image
            src={TGLIAMZ}
            alt="Таганрогский государственный литературный и историко-архитектурный музей-заповедник"
            className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
          <p className="font-bold text-2xl text-center text-foreground-secondary transition-colors duration-300 ease-in-out hover:text-accent-primary cursor-pointer">
            Таганрогский государственный литературный и историко-архитектурный музей-заповедник
          </p>
        </div>
      </Container>
    </Section>
  );
};
