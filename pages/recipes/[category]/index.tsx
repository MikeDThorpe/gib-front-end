import Category from "../../../Types/Category";

export interface CategoryPageProps {
	categories: Category[];
}

const CategoryPage = ({ categories }: CategoryPageProps) => {
	return <></>;
};

export default CategoryPage;

export async function getStaticPaths() {
	const res = await fetch(`${process.env.CMS_HOST}categories`);
	const categoryData = await res.json();

	const paths = categoryData.map((category) => {
		return {
			params: {
				category: category.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const res = await fetch(
		`${process.env.CMS_HOST}categories/${context.params.category}`
	);
	const categoryData = await res.json();

	return {
		props: { categories: categoryData },
	};
}
