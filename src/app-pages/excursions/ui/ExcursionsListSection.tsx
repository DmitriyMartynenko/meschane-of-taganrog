import { ExcursionsList } from '@/widgets/excursions-list';

import { fadeUp, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  Heading,
  HeadingHighlight,
  HeadingTitle,
  MotionDiv,
  Section,
} from '@/shared/ui';

export const ExcursionsListSection = () => {
  return (
    <Section
      className="scroll-mt-[3vh] bg-background-secondary"
      id={SECTION_IDS.EXCURSIONS_EXCURSIONS_LIST}
      noScrollMargin
    >
      <Container className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
        <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Heading>
            <HeadingTitle>
              <HeadingHighlight>Подобранные</HeadingHighlight> экскурсии
            </HeadingTitle>
          </Heading>
        </MotionDiv>
        <ExcursionsList />
      </Container>
    </Section>
  );
};
