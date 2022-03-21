// @flow
import * as React from "react";

import RecipeThumbnail from "./RecipeThumbnail";
import Recipe from "../../../Types/Recipe";
import RecipeMeta from "./RecipeMeta";

export interface RecipeHeaderProps {
  recipe: Recipe;
}

const RecipeHeader = ({ recipe }: RecipeHeaderProps) => {
  return (
    <section className="mt-4 recipe_header">
      <div className="recipe_header_image">
      <RecipeThumbnail src={""} />
      </div>
      <RecipeMeta recipe={recipe} />
    </section>
  );
};

export default RecipeHeader;
