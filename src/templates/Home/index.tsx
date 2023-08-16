import Head from 'next/head';
import { Base } from '../Base';

import { PageNotFound } from '../PageNotFound';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

import config from '../../config';

export type SectionProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps;

export type PageData = {
  menu: { links: MenuLinkProps[] } & LogoLinkProps;
  sections: SectionProps[];
  footerHtml: string;
  slug: string;
  title: string;
};

export type HomeProps = {
  data: PageData[];
};

export const Home = ({ data }: HomeProps) => {
  if (data === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
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
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return (
            <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
      {/* <GridTwoColumns {...sections[0]} />
      <GridContent {...sections[1]} />
      <GridText {...sections[2]} />
      <GridImage {...sections[3]} /> */}
    </Base>
  );
};
