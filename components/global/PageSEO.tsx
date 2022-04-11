import Head from "next/head";
import { useRouter } from "next/router";

export interface PageSEOProps {
	title: string;
	description: string;
	category: string;
}

const PageSEO = ({ title, description, category }: PageSEOProps) => {
	const router = useRouter();
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
				content={`${description}. Find more ${category.toLowerCase()} at giveitbeans.co.uk.`}
				key="description"
			/>
			<meta
				name="url"
				property="og:url"
				content={`https://www.giveitbeans.co.uk${router.pathname}`}
				key="url"
			/>
			<meta name="type" property="og:type" content="blog" key="type" />
		</Head>
	);
};

export default PageSEO;
