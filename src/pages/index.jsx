import P from 'prop-types';
import { Home } from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;

  try {
    data = await loadPages('minha-pagina');
  } catch (e) {
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
