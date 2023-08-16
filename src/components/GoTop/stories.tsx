import { Meta, StoryFn } from '@storybook/react';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
};
