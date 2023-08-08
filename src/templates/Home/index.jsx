import P from 'prop-types';

import Head from 'next/head';
import { Base } from '../Base';

import { PageNotFound } from '../PageNotFound';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import config from '../../config';

export const Home = ({ data }) => {
  if (data === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, title } = data[0];
  const { links, text, link, imgSrc } = menu;
  console.log(sections);

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, imgSrc }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      <GridTwoColumns {...sections[0]} />
      <GridContent {...sections[1]} />
      <GridText {...sections[2]} />
      <GridImage {...sections[3]} />
    </Base>
  );
};

Home.propTypes = {
  data: P.object,
};
