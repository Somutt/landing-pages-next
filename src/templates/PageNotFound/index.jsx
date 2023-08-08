import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title='Page not Found'
      html='<p>The page you want was not found <a href="/">Click here to return</a>'
    />
  );
};
