import React from "react";
import Image from "next/image";
import Link from "next/link";

import Recipe from "../../../Types/Recipe";
import RecipeThumbnail from "./RecipeThumbnail";

import { parseDate } from "../../../js/utils";

export enum recipeMeta {
  DATE,
  TAGS,
  CATEGORY,
  COOK_TIME,
  PEOPLE_SERVED,
}

export interface RecipeCardProps {
  recipe: Recipe;
  displayMeta: recipeMeta[];
}

const RecipeCard = ({ recipe, displayMeta }: RecipeCardProps) => {
  const buildMetaInfo = (recipeMetaArr: recipeMeta[]) => {
    return recipeMetaArr.map((meta) => {
      switch (meta) {
        case recipeMeta.DATE:
          return (
            <>
              <p>Added {parseDate(recipe.created_at)}</p>
            </>
          );
        case recipeMeta.TAGS:
          return (
            <>
              <Image
                src={"/media/icons/tags-solid.svg"}
                height={18}
                width={18}
                alt="shopping tags icon"
              />
              {recipe.tags.map((tag, index) => (
                <Link key={tag.id} href={`/recipes/tags/${tag.title}`}>
                  <a>
                    <h5 className="mx-1 my-0 link">
                      {tag.title}
                      {index === recipe.tags.length - 1 ? "" : ","}
                    </h5>
                  </a>
                </Link>
              ))}
            </>
          );
        case recipeMeta.CATEGORY:
          return <div></div>;
        case recipeMeta.COOK_TIME:
          return <div></div>;
        case recipeMeta.PEOPLE_SERVED:
          return <div></div>;
      }
    });
  };

  return (
    <Link
      href={`/recipes/${recipe.category.title.toLowerCase()}/${recipe.slug}`}
      passHref
    >
      <div className="recipe_card">
        <div className="recipe_card_image">
          <RecipeThumbnail src="" />
        </div>
        <div>
          <h4 className="my-2">{recipe.title}</h4>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              {buildMetaInfo(displayMeta)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
