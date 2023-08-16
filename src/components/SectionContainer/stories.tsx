import { Meta, StoryFn } from '@storybook/react';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          perferendis libero dolore excepturi tempora esse vero iure. Et ratione
          repellat ab explicabo fugiat eligendi. Accusantium doloremque
          inventore esse totam tenetur.
        </p>
      </div>
    ),
  },
} as Meta;

export const Template: StoryFn<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
