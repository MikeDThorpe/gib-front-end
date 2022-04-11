import type { GetServerSideProps } from "next";
import RecipesGrid from "../../components/features/RecipesGrid";
import PageSEO from "../../components/global/PageSEO";

const RecipePage = ({ recipes }) => {
	return (
		<>
			<PageSEO
				title={`All Recipes`}
				description={`Search all recipes from giveitbeans.co.uk. Includes meat, seafood, vegetarian and vegan recipes that are delicious and easy to make at home.`}
			/>
			<div>
				<h2 className="bold text-center my-5">Recipes</h2>
				<RecipesGrid recipes={recipes} />
			</div>
		</>
	);
};

export default RecipePage;

export const getServerSideProps: GetServerSideProps = async (conext) => {
	const recipeApiResponse = await fetch(`${process.env.CMS_HOST}recipes`);
	const recipeData = await recipeApiResponse.json();

	return {
		props: {
			recipes: recipeData,
		},
	};
};
