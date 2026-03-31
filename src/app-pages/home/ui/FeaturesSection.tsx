import { fadeUp, staggerContainer, viewport } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import {
  Container,
  FeatureCard,
  Heading,
  HeadingHighlight,
  HeadingSubtitle,
  HeadingTitle,
  MotionDiv,
  Section,
} from '@/shared/ui';

import Book from '../assets/icons/book.svg';
import Briefcase from '../assets/icons/briefcase.svg';
import Chessknight from '../assets/icons/chessknight.svg';
import Clock from '../assets/icons/clock.svg';

const FEATURE_CARDS = [
  {
    id: '1',
    icon: Clock,
    iconAlt: 'Часы',
    text: 'Погрузитесь в мещанский мир конца XIX-XX веков и узнайте, как жил Таганрог более 100 лет назад',
  },
  {
    id: '2',
    icon: Briefcase,
    iconAlt: 'Портфель',
    text: 'Получите уникальную научную информацию о жителях города прошлых веков',
  },
  {
    id: '3',
    icon: Chessknight,
    iconAlt: 'Фигуря коня',
    text: 'Проведите досуг необычно – в компании людей, чьи истории живут в архивах музея',
  },
  {
    id: '4',
    icon: Book,
    iconAlt: 'Книга',
    text: 'Блесните своими знаниями в кругу друзей или в школе',
  },
];

export const FeaturesSection = () => {
  return (
    <Section className="bg-background-primary" id={SECTION_IDS.HOME_FEATURES}>
      <Container className="flex flex-col items-center justify-center gap-6 px-6 pt-12 pb-24 lg:gap-8 lg:px-8 lg:pt-16 lg:pb-32">
        <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <Heading>
            <HeadingSubtitle>Почему стоит попробовать</HeadingSubtitle>
            <HeadingTitle>
              <HeadingHighlight>Иммерсивные</HeadingHighlight> экскурсии
            </HeadingTitle>
          </Heading>
        </MotionDiv>
        <MotionDiv
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-4 lg:flex-row lg:gap-6"
        >
          {FEATURE_CARDS.map((card) => (
            <MotionDiv className="basis-1/4" key={card.id} variants={fadeUp}>
              <FeatureCard
                className="h-full max-w-100 lg:max-w-none"
                key={card.id}
                icon={card.icon}
                iconAlt={card.iconAlt}
                text={card.text}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </Section>
  );
};
