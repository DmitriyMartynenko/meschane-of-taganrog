import Image from 'next/image';

import { Section, Container, HeadingTitle } from '@/shared/ui';

import meschane1 from '../assets/images/meschane-1.png';
import meschane2 from '../assets/images/meschane-2.png';
import meschane3 from '../assets/images/meschane-3.png';

export const PhotoSection = () => {
  return (
    <Section className="flex bg-background-secondary" id="photo-section">
      <Container className="flex gap-16 py-16">
        <HeadingTitle className="text-center">
          Мещане <span className="whitespace-nowrap">г. Таганрога</span>
        </HeadingTitle>
        <div className="flex gap-8">
          <Image
            src={meschane1}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={meschane2}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
          <Image
            src={meschane3}
            alt="Фотография мещан"
            className="rounded-xl transition-transform hover:scale-110"
          />
        </div>
      </Container>
    </Section>
  );
};
