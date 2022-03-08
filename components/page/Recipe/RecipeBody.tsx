import React from "react";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const RecipeBody = () => {
    return (
        <section className="mt-5 recipe_body">
            <RecipeIngredients />
            <RecipeInstructions />
        </section>
    );
};

export default RecipeBody;