import type { GetServerSideProps } from "next";
import Link from "next/link";
import Recipe from "../Types/Recipe";
import RecipesGrid from "../components/features/RecipesGrid";
import PageSEO from "../components/global/PageSEO";

interface HomeProps {
  latestRecipes: Recipe[];
}

const Home = ({ latestRecipes }: HomeProps) => {
  return (
    <>
    <PageSEO title="DIY Food Blog" description="DIY food blog. Sheffield, England."/>
      <section>
        <h2 className="text-center my-5 bold">Latest Recipes</h2>
        <RecipesGrid recipes={latestRecipes} limit={6} />
      </section>
    </>
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
