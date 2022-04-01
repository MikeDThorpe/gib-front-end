import Recipe from "../../../Types/Recipe";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

export interface RecipeBodyProps {
    recipe: Recipe;
}

const RecipeBody = ({recipe}: RecipeBodyProps) => {
    return (
        <section className="mt-5 recipe_body">
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeInstructions instructions={recipe.instructions}/>
        </section>
    );
};

export default RecipeBody;