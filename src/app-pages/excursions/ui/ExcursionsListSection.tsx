import { ExcursionsList } from '@/widgets/excursions-list';

import { SECTION_IDS } from '@/shared/model';
import { Container, Heading, HeadingHighlight, HeadingTitle, Section } from '@/shared/ui';

export const ExcursionsListSection = () => {
  return (
    <Section
      className="scroll-mt-[3vh] bg-background-secondary"
      id={SECTION_IDS.EXCURSIONS_EXCURSIONS_LIST}
      noScrollMargin
    >
      <Container className="flex flex-col items-center justify-center py-16">
        <Heading>
          <HeadingTitle>
            <HeadingHighlight withUnderline>Подобранные</HeadingHighlight> экскурсии
          </HeadingTitle>
        </Heading>
        <ExcursionsList />
      </Container>
    </Section>
  );
};
