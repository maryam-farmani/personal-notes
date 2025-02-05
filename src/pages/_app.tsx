import { SessionProvider } from 'next-auth/react';
import * as React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from '../context/ThemeContext';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CustomThemeProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;