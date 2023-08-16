import { GetStaticPaths, GetStaticProps } from 'next';

export default function Page() {
  return <h1>Teste</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'Samuel',
    },
  };
};
