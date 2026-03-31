import { NavLink } from '@/widgets/header';
import { PhotoGrid } from '@/widgets/photo-grid';

import { type Photo } from '@/entities/photo';

import { fadeLeft, fadeUp, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  Button,
  Container,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
  MotionP,
  Section,
} from '@/shared/ui';

import meshchane1 from '../assets/images/meshchane-1.png';
import meshchane2 from '../assets/images/meshchane-2.png';
import meshchane3 from '../assets/images/meshchane-3.png';

const MESHCHANE_PHOTOS: Photo[] = [
  {
    image: meshchane1,
    title: 'Семья мещан города Таганрога',
    years: [1898, 1902],
    author: 'И.К. Майков',
  },
  {
    image: meshchane2,
    title: 'Мещане Таганрога',
    years: [1891, 1898],
    author: 'С.С. Исакович',
  },
  {
    image: meshchane3,
    title: 'Портрет мещанина',
    years: [1902, 1909],
    author: 'В. Петрыковский',
  },
];

export const PhotoSection = () => {
  return (
    <Section className="flex bg-background-secondary" id={SECTION_IDS.HOME_PHOTO}>
      <Container className="flex flex-col items-center justify-center gap-6 px-6 py-12 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
        <MotionDiv
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex shrink-0 flex-col gap-6 text-center lg:gap-8 lg:text-start"
        >
          <Heading className="lg:items-start">
            <HeadingSubtitle withDash>Фото на память</HeadingSubtitle>
            <HeadingTitle className="lg:text-start">
              Мещане <br />
              <HeadingHighlight>
                <span className="whitespace-nowrap">г. Таганрога</span>
              </HeadingHighlight>
            </HeadingTitle>
          </Heading>
          <MotionP
            variants={fadeUp}
            className="flex max-w-xs flex-col gap-1 leading-relaxed tracking-wide text-foreground-primary"
          >
            <span>
              Подлинные фотографии из фондов{' '}
              <Button
                className="p-0 text-center font-semibold tracking-wider text-accent-primary normal-case lg:text-start"
                variant="ghost"
              >
                <NavLink href={`/#${SECTION_IDS.HOME_PARTNERS}`}>
                  Таганрогского государственного музея-заповедника.
                </NavLink>
              </Button>
            </span>
            <span>Каждый снимок – история конкретной семьи, конкретного человека.</span>
          </MotionP>
        </MotionDiv>
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grow"
        >
          <PhotoGrid className="flex-col lg:flex-row" photos={MESHCHANE_PHOTOS} />
        </MotionDiv>
      </Container>
    </Section>
  );
};
