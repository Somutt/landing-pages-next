export default function Page() {
  return <h1>Teste</h1>;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      name: 'Samuel',
    },
  };
};
