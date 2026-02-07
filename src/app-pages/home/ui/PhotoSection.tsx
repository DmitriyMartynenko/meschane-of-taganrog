import { PhotoGrid } from '@/widgets/photo-grid';

import { type Photo } from '@/entities/photo';

import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  Section,
} from '@/shared/ui';

import meschane1 from '../assets/images/meschane-1.jpg';
import meschane2 from '../assets/images/meschane-2.jpg';
import meschane3 from '../assets/images/meschane-3.jpg';

const MESCHANE_PHOTOS: Photo[] = [
  {
    image: meschane1,
    title: 'Семья мещан города Таганрога',
    years: [1898, 1902],
    author: 'И.К. Майков',
  },
  {
    image: meschane2,
    title: 'Мещане Таганрога',
    years: [1891, 1898],
    author: 'С.С. Исакович',
  },
  {
    image: meschane3,
    title: 'Портрет мещанина',
    years: [1902, 1909],
    author: 'В. Петрыковский',
  },
];

export const PhotoSection = () => {
  return (
    <Section className="flex bg-background-secondary" id={SECTION_IDS.HOME_PHOTO}>
      <Container className="flex items-center justify-center gap-16 py-16">
        <Heading>
          <HeadingSubtitle withDash>Фото на память</HeadingSubtitle>
          <HeadingTitle>
            Мещане <br />
            <HeadingHighlight>
              <span className="whitespace-nowrap">г. Таганрога</span>
            </HeadingHighlight>
          </HeadingTitle>
        </Heading>
        <PhotoGrid photos={MESCHANE_PHOTOS} />
      </Container>
    </Section>
  );
};
