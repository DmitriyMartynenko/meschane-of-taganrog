import Image from 'next/image';

import { Section, Container, HeadingTitle } from '@/shared/ui';

import Meschane1 from '../assets/images/meschane-1.png';
import Meschane2 from '../assets/images/meschane-2.png';
import Meschane3 from '../assets/images/meschane-3.png';

export const PhotoSection = () => {
  return (
    <Section className="flex bg-background-secondary" id="photo-section">
      <Container className="flex gap-16 py-16">
        <HeadingTitle className="text-center">
          Мещане <span className="whitespace-nowrap">г. Таганрога</span>
        </HeadingTitle>
        <div className="flex gap-8">
          <Image
            src={Meschane1}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={Meschane2}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={Meschane3}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
        </div>
      </Container>
    </Section>
  );
};
