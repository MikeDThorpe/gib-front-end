import React from "react";

export interface RecipeIngredientsProps {
  ingredients: string;
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {

  const outputIngredients = () => {
    return ingredients.split("-").map((ingredient, index) => {
      return (
        <li key={index} className="mb-2">
          {ingredient.trim()}
        </li>
      );
    });
  };

  return (
    <section>
      <div className="border-bottom pb-4">
        <h2>What You'll Need</h2>
      </div>
      <ul className="pt-3">{outputIngredients()}</ul>
    </section>
  );
};

export default RecipeIngredients;
