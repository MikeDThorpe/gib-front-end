import type { GetServerSideProps } from "next";
import Recipe from "../Types/Recipe";
import RecipesGrid from "../components/features/RecipesGrid";
import PageSEO from "../components/global/PageSEO";
import CategoryLinks from "../components/features/CategoryLinks";

interface HomeProps {
  latestRecipes: Recipe[];
  categories:{id: number, title: string}[];
}

const Home = ({ latestRecipes, categories }: HomeProps) => {
  console.log(categories);
  return (
    <>
      <PageSEO
        title="DIY Food Blog"
        description="DIY food blog. Sheffield, England."
      />
      <h2 className="text-center my-5 bold">Latest Recipes</h2>
      <RecipesGrid recipes={latestRecipes} limit={6} />
      <CategoryLinks categories={categories} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (conext) => {
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
