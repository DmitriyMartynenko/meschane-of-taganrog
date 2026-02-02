'use client';

import { ExcursionsList } from '@/widgets/excursions-list';

import { useExcursionFiltering } from '@/features/excursion-filtering';

import { Container, Heading, HeadingHighlight, HeadingTitle, Section } from '@/shared/ui';

import { excursions } from '../model/excursions.mock';

export const ExcursionsSection = () => {
  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);

  return (
    <Section
      className="scroll-mt-[3vh] bg-background-secondary"
      id="excursions-section"
      noScrollMargin
    >
      <Container className="flex flex-col items-center justify-center gap-16 py-16">
        <Heading>
          <HeadingTitle>
            <HeadingHighlight withUnderline>Подобранные</HeadingHighlight> экскурсии
          </HeadingTitle>
        </Heading>
        {isPending ? (
          <div className="flex h-40 items-center justify-center">
            <p className="animate-pulse text-xl text-muted-primary">Поиск лучших вариантов...</p>
          </div>
        ) : (
          <>
            <ExcursionsList excursions={filteredExcursions} />
          </>
        )}
      </Container>
    </Section>
  );
};
