import { Heading } from '.';

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
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

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
