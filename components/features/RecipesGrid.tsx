import Recipe from "../../Types/Recipe";
import RecipeCard from "../page/Recipe/RecipeCard";
import {recipeMeta} from "../page/Recipe/RecipeCard"

interface RecipesGridProps {
  recipes: Recipe[];
}

const RecipesGrid = ({ recipes }: RecipesGridProps) => {
  return (
    <section className="recipe_card_grid">
      {recipes.map((recipe) => {
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
