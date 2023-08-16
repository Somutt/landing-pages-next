import { Meta, StoryFn } from '@storybook/react';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    imgSrc: 'assets/images/logostrapi.svg',
    link: 'https://localhost',
  },
} as Meta;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  imgSrc: '',
};
