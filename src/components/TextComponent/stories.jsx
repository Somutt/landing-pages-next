import { TextComponent } from '.';

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
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
