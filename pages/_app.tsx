import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>a tree map</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
