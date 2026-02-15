import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Heading, HeadingHighlight, HeadingSubtitle, HeadingTitle } from '../elements';

const meta: Meta<typeof Heading> = {
  title: 'shared/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => (
    <Heading>
      <HeadingSubtitle>Подзаголовок секции</HeadingSubtitle>
      <HeadingTitle>
        Это <HeadingHighlight>Заголовок</HeadingHighlight>
      </HeadingTitle>
    </Heading>
  ),
};

export const WithDashSubtitle: Story = {
  render: () => (
    <Heading>
      <HeadingSubtitle withDash>Секция с тире</HeadingSubtitle>
      <HeadingTitle>
        Пример с <HeadingHighlight withUnderline>Подчёркиванием</HeadingHighlight>
      </HeadingTitle>
    </Heading>
  ),
};

export const CenteredTitle: Story = {
  render: () => (
    <Heading className="items-center text-center">
      <HeadingSubtitle>Центрированный</HeadingSubtitle>
      <HeadingTitle>
        <HeadingHighlight>Заголовок</HeadingHighlight> Центр
      </HeadingTitle>
    </Heading>
  ),
};
