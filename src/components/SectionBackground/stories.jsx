import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          perferendis libero dolore excepturi tempora esse vero iure. Et ratione
          repellat ab explicabo fugiat eligendi. Accusantium doloremque
          inventore esse totam tenetur.
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
