import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/global/Layout";
<<<<<<< HEAD
// style sheets
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "../public/css/main.css";
=======

import "../css/main.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
>>>>>>> 758c91f601c6a29f7ac55a9fb5c640fa42767007

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
