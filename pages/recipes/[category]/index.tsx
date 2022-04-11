import RecipesGrid from "../../../components/features/RecipesGrid";
import Recipe from "../../../Types/Recipe";
import PageSEO from "../../../components/global/PageSEO";

export interface CategoryPageProps {
	categoryTitle: string;
	categoryRecipes: Recipe[];
}

const CategoryPage = ({
	categoryTitle,
	categoryRecipes,
}: CategoryPageProps) => {
	return (
		<>
			<PageSEO
				title={`${categoryTitle} Recipes`}
				description={`A collection of ${categoryTitle.toLowerCase()} recipes from giveitbeans.co.uk. Declicious and easy to make ${categoryTitle.toLowerCase()} recipes. Read online and make at home.`}
			/>
			<h2 className="my-5 text-center bold">{categoryTitle} Recipes</h2>
			<RecipesGrid recipes={categoryRecipes} displayAll={true} />
		</>
	);
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
	const categoryTitle =
		context.params.category[0].toUpperCase() +
		context.params.category.substring(1);
	const res = await fetch(
		`${process.env.CMS_HOST}recipes/?category.title=${categoryTitle}`
	);
	const recipes = await res.json();

	return {
		props: {
			categoryTitle: categoryTitle,
			categoryRecipes: recipes,
		},
	};
}
