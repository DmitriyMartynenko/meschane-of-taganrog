import { ExcursionsList } from '@/widgets/excursions-list';
import { useExcursionFiltering } from '@/features/excursion-filtering';
import { Container, HeadingHighlight, HeadingTitle, Section, SectionHeading } from '@/shared/ui';

import { excursions } from '../model/constants';

export const ExcursionsSection = () => {
  const { filteredExcursions } = useExcursionFiltering(excursions);

  return (
    <Section className="bg-background-secondary" id="excursions-section">
      <Container className="flex-col gap-16 py-16">
        <SectionHeading>
          <HeadingTitle>
            <HeadingHighlight withUnderline>Подобранные</HeadingHighlight> экскурсии
          </HeadingTitle>
        </SectionHeading>
        <ExcursionsList excursions={filteredExcursions} />
      </Container>
    </Section>
  );
};
