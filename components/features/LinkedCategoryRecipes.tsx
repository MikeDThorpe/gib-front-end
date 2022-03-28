import React from "react";
import Link from "next/link";
import useLinkedRecipes from "../../hooks/useLinkedRecipes";
import RecipeCard, { recipeMeta } from "../page/Recipe/RecipeCard";

export interface LinkedCategoryRecipesProps {
  categoryTitle: string;
  focusRecipeId: number;
}

export const LinkedCategoryRecipes = ({
  categoryTitle,
  focusRecipeId,
}: LinkedCategoryRecipesProps) => {
  const { recipes, fetchingData } = useLinkedRecipes(
    categoryTitle,
    focusRecipeId
  );

  console.log(recipes);

  return (
    <section className="border-top">
      <h2 className="my-4">More {categoryTitle} Recipes</h2>
      {fetchingData ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <section className="recipe_card_grid">
          {recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <RecipeCard recipe={recipe} displayMeta={[recipeMeta.TAGS]}/>
              </div>
            );
          })}
        </section>
      )}
      <Link href={`/recipes/${categoryTitle.toLowerCase()}`} passHref>
        <a>
          <button className="button button-main d-block mx-auto mt-5">
            More Vegetarian Recipes
          </button>
        </a>
      </Link>
    </section>
  );
};
