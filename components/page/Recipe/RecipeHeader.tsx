// @flow
import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import RecipeThumbnail from "./RecipeThumbnail";
import Recipe from "../../../Types/Recipe";
import RecipeMeta from "./RecipeMeta";

export interface RecipeHeaderProps {
  recipe: Recipe;
}

const RecipeHeader = ({ recipe }: RecipeHeaderProps) => {
  return (
    <section className="mt-4 recipe_header">
      <RecipeThumbnail src={""} />
      <RecipeMeta recipe={recipe} />
    </section>
  );
};

export default RecipeHeader;
