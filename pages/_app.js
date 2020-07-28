import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>

        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>

          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
