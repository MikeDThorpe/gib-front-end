import type { GetServerSideProps } from "next";
import RecipesGrid from "../../components/features/RecipesGrid";

const RecipePage = ({ recipes }) => {
  return (
    <div>
      <h2 className="bold text-center my-5">Recipes</h2>
      <RecipesGrid recipes={recipes} />
    </div>
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
