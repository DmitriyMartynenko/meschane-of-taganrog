import Image from 'next/image';

import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { Title } from '@/shared/ui/elements/Heading';

import meschaneImg1 from '../assets/images/meschane-1.png';
import meschaneImg2 from '../assets/images/meschane-2.png';
import meschaneImg3 from '../assets/images/meschane-3.png';

export const PhotoSection = () => {
  return (
    <Section className="flex bg-background-secondary">
      <Container className="flex gap-16">
        <Title className="text-center">
          Мещане <span className="whitespace-nowrap">г. Таганрога</span>
        </Title>
        <div className="flex gap-8">
          <Image
            src={meschaneImg1}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={meschaneImg2}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={meschaneImg3}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
        </div>
      </Container>
    </Section>
  );
};
