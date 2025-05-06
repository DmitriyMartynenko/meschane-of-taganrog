import {
  Section,
  Container,
  BenefitCard,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
} from '@/shared/ui';

import Clock from '../assets/icons/clock.svg';
import Briefcase from '../assets/icons/briefcase.svg';
import Chessknight from '../assets/icons/chessknight.svg';
import Book from '../assets/icons/book.svg';

export const BenefitsSection = () => {
  return (
    <Section id="benefits-section">
      <Container className="flex-col gap-16 pt-16 pb-32">
        <Heading>
          <HeadingSubtitle withoutLine>Почему стоит попробовать</HeadingSubtitle>
          <HeadingTitle>
            Иммер<HeadingHighlight>с</HeadingHighlight>ивные эк
            <HeadingHighlight>с</HeadingHighlight>кур
            <HeadingHighlight>с</HeadingHighlight>ии
          </HeadingTitle>
        </Heading>
        <div className="flex gap-6">
          <BenefitCard className="basis-1/4" icon={Clock} iconAlt="Часы">
            Погрузитесь в мещанский мир конца XIX- XX веков и узнайте, как жил Таганрог более 100
            лет назад
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={Briefcase} iconAlt="Чемодан">
            Получите уникальную научную информацию о жителях города прошлых веков
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={Chessknight} iconAlt="Чемодан">
            Проведите необычно свой досуг
          </BenefitCard>
          <BenefitCard className="basis-1/4" icon={Book} iconAlt="Чемодан">
            Блестните своими знаниями в кругу друзей или в школе
          </BenefitCard>
        </div>
      </Container>
    </Section>
  );
};
