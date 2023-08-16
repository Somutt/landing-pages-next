import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Light: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Light.args = {
  dark: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  dark: false,
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
