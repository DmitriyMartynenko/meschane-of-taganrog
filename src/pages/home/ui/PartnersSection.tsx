import Image from 'next/image';

import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { HeadingHighlight, Title } from '@/shared/ui/elements/Heading';

import tgliamzImg from '../assets/images/tgliamz.png';

export const PartnersSection = () => {
  return (
    <Section className="flex bg-[url(@/pages/home/assets/images/parthers-background.png)] bg-neutral-900 bg-center bg-no-repeat  bg-cover">
      <Container className="flex-col py-16">
        <Title>
          <HeadingHighlight>Наши партнеры</HeadingHighlight>
        </Title>
        <div className="flex flex-col justify-center items-center grow gap-16">
          <Image
            src={tgliamzImg}
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
