import { ExcursionsList } from '@/widgets/excursions-list';

import { Container, Heading, HeadingHighlight, HeadingTitle, Section } from '@/shared/ui';

export const ExcursionsSection = () => {
  return (
    <Section
      className="scroll-mt-[3vh] bg-background-secondary"
      id="excursions-section"
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
