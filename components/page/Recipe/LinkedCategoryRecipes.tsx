import React, { useEffect, useState } from "react";
import Recipe from "../../../Types/Recipe";
import RecipeCard from "./RecipeCard";
export interface LinkedRecipesProps {
  category?: string;
  tag?: string;
  focusRecipeId?: number // prevents the same recipe being linked to its own page
}

export const LinkedCategoryRecipes = ({
  category,
  focusRecipeId
}: LinkedRecipesProps) => {
  const [recipes, setRecipes] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);

  const fetchLinkedRecipesByCategory = async () => {
    setFetchingData(true);
    const res = await fetch(
      `http://localhost:1337/recipes?category.title=${category}`
    );
    const recipes = await res.json();
    let formattedRecipes = recipes.filter((recipe: Recipe)=> recipe.id !== focusRecipeId)
      .slice(recipes.length - 5, recipes.length);
    setRecipes(formattedRecipes);
    setFetchingData(false);
  };

  useEffect(() => {
    fetchLinkedRecipesByCategory();
  }, []);

  console.log(recipes);

  return (
    <section className="border-top">
      <h2 className="my-4">More {category} Recipes</h2>
      {fetchingData ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <section className="recipe_card_grid">
          {recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </section>
      )}
      <button>More Vegetarian Recipes</button>
    </section>
  );
};
