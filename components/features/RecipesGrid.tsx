import { useEffect, useState } from "react";
import Recipe from "../../Types/Recipe";
import RecipeCard from "./RecipeCard";
import { recipeMeta } from "./RecipeCard";

interface RecipesGridProps {
  recipes: Recipe[];
  limit?: number;
  displayAll?: boolean;
}

const RecipesGrid = ({ recipes, limit, displayAll }: RecipesGridProps) => {
  const [recipesToShow, setRecipesToShow] = useState<Recipe[]>([]);

  useEffect(() => {
    const filteredRecipes: Recipe[] = displayAll
      ? recipes
      : recipes.reverse().slice(0, limit);

    setRecipesToShow(filteredRecipes);
  }, [displayAll, recipes, limit]);

  return (
    <section className="recipe_card_grid">
      {recipesToShow.map((recipe) => {
        return (
          <RecipeCard
            recipe={recipe}
            key={recipe.id}
            displayMeta={[recipeMeta.DATE]}
          />
        );
      })}
    </section>
  );
};

export default RecipesGrid;
