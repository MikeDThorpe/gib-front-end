import type { GetServerSideProps } from "next";
import Recipe from "../Types/Recipe";
import RecipesGrid from "../components/features/RecipesGrid";
import PageSEO from "../components/global/PageSEO";
// import CategoryLinks from "../components/features/CategoryLinks";

interface HomeProps {
<<<<<<< HEAD
  latestRecipes: Recipe[];
  categories: { id: number; title: string }[];
}

const Home = ({ latestRecipes, categories }: HomeProps) => {
  return (
    <>
      <PageSEO
        title="DIY Food Blog"
        description="DIY food blog. Sheffield, England."
      />
      <h2 className="text-center my-5 bold">Latest Recipes</h2>
      <RecipesGrid recipes={latestRecipes} limit={6} />
      {/* <CategoryLinks categories={categories} /> */}
    </>
  );
=======
	latestRecipes: Recipe[];
	categories: { id: number; title: string }[];
}

const Home = ({ latestRecipes, categories }: HomeProps) => {
	console.log(categories);
	return (
		<>
			<PageSEO
				title="DIY Food Blog"
				description="A DIY food blog from Sheffield, England. Find tasty, easy-to-make recipes online."
			/>
			<h2 className="text-center my-5 bold">Latest Recipes</h2>
			<RecipesGrid recipes={latestRecipes} limit={6} />
			{/* <CategoryLinks categories={categories} /> */}
		</>
	);
>>>>>>> 758c91f601c6a29f7ac55a9fb5c640fa42767007
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const recipeApiResponse = await fetch(`${process.env.CMS_HOST}recipes`);
	const recipeData = await recipeApiResponse.json();

	const categoryApiResponse = await fetch(`${process.env.CMS_HOST}categories`);
	const categoryData = await categoryApiResponse.json();
	let categories = categoryData.map((category) => ({
		id: category.id,
		title: category.title,
	}));

	return {
		props: {
			latestRecipes: recipeData,
			categories: categories,
		},
	};
};
