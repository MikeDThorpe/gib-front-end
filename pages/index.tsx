import type { GetServerSideProps } from "next";
import Recipe from "../Types/Recipe";
import RecipesGrid from "../components/features/RecipesGrid";

interface HomeProps {
  latestRecipes: Recipe[];
}

const Home = ({ latestRecipes }: HomeProps) => {
  console.log(latestRecipes);

  return (
    <section>
      <h2 className="text-center mb-5">Latest Recipes</h2>
      <RecipesGrid recipes={latestRecipes} />
    </section>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (conext) => {
  const apiResponse = await fetch(`${process.env.CMS_HOST}recipes`);
  const recipeData = await apiResponse.json();

  return {
    props: {
      latestRecipes: recipeData,
    },
  };
};
