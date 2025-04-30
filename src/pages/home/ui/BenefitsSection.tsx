import { Section } from '@/shared/ui/elements/Section';
import { Container } from '@/shared/ui/elements/Container';
import { BenefitCard } from '@/shared/ui/elements/BenefitCard';
import { Heading, HeadingHighlight, Subtitle, Title } from '@/shared/ui/elements/Heading';

import clockIcon from '../assets/icons/clock.svg';
import briefcaseIcon from '../assets/icons/briefcase.svg';
import chessknightIcon from '../assets/icons/chessknight.svg';
import bookIcon from '../assets/icons/book.svg';

export const BenefitsSection = () => {
  return (
    <Section id="benefits-section">
      <Container className="flex-col gap-16 py-16">
        <Heading>
          <Subtitle withoutLine>Почему стоит попобовать</Subtitle>
          <Title>
            Иммер<HeadingHighlight>с</HeadingHighlight>ивные эк
            <HeadingHighlight>с</HeadingHighlight>кур
            <HeadingHighlight>с</HeadingHighlight>ии
          </Title>
        </Heading>
        <div className="flex gap-6">
          <BenefitCard className="basis-1/4" icon={clockIcon} iconAlt="Часы">
            Погрузитесь в мещанский мир конца XIX- XX веков и узнайте, как жил Таганрог более 100
            лет назад
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={briefcaseIcon} iconAlt="Чемодан">
            Получите уникальную научную информацию о жителях города прошлых веков
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={chessknightIcon} iconAlt="Чемодан">
            Проведите необычно свой досуг
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={bookIcon} iconAlt="Чемодан">
            Блестните своими знаниями в кругу друзей или в школе
          </BenefitCard>
        </div>
      </Container>
    </Section>
  );
};
