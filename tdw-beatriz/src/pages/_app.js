import React from 'react';
import Home from './Home';

export default function App({ Component, pageProps }) {
  const isHomePage = Component === Home;

  return (
    <>{isHomePage ? <Home {...pageProps} /> : <Component {...pageProps} />}</>
  );
}
