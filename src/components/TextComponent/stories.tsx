import { Meta, StoryFn } from '@storybook/react';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Delectus repellat pariatur, quibusdam accusamus minus quaerat dolorem fuga,
    minima dignissimos architecto aliquam cumque,
    nam asperiores earum possimus debitis hic ea rem.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
