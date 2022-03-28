import type { GetServerSideProps } from "next";
import Link from "next/link";
import Recipe from "../Types/Recipe";
import RecipesGrid from "../components/features/RecipesGrid";

interface HomeProps {
  latestRecipes: Recipe[];
}

const Home = ({ latestRecipes }: HomeProps) => {
  return (
    <section>
      <h2 className="text-center mb-5">Latest Recipes</h2>
      <RecipesGrid recipes={latestRecipes} limit={6} />
      <Link href={`/recipes`} passHref>
        <a>
          <button className="button button-main d-block mx-auto mt-5">
            More Recipes
          </button>
        </a>
      </Link>
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
