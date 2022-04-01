import Head from "next/head";
import { useRouter } from "next/router";

export interface PageSEOProps {
  title: string;
  description: string;
}

const PageSEO = ({ title, description}: PageSEOProps) => {
    const router = useRouter();
    console.log(router.pathname)
  return (
    <Head>
      <title>{title} | Giveitbeans.co.uk</title>
      <meta
        name="title"
        property="og:title"
        content={`${title} | Giveitbeans.co.uk`}
        key="title"
      />
      <meta
        name="description"
        property="og:description"
        content={description}
        key="description"
      />
      <meta name="url" property="og:url" content={`https://www.giveitbeans.co.uk${router.pathname}`} key="url" />
      <meta name="type" property="og:type" content="blog" key="type" />
    </Head>
  );
};

export default PageSEO;
