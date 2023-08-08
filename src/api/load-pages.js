import config from '../config';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug
    ? `?filters[slug][$eq]=${slug.replace(/[^a-z0-9-_]/gi, '')}&populate=deep`
    : '';
  const url = `${config.url}/pages/${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};

///pages/?filters[slug][$eq]=minha-pagina&populate=deep
