import P from 'prop-types';
//import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;

//MyApp.propTypes = AppProps;
MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};
