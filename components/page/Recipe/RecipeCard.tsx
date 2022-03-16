import React from "react";
import Image from "next/image";
import Link from "next/link";

import Recipe from "../../../Types/Recipe";
import RecipeThumbnail from "./RecipeThumbnail";

export interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${recipe.category.title.toLowerCase()}/${recipe.slug}`} passHref>
      <div className="recipe_card">
        <div className="recipe_card_image">
          <RecipeThumbnail src="" />
        </div>
        <div>
          <h4 className="my-2">{recipe.title}</h4>
          <div className="d-flex">
            <div className="d-flex align-items-center">
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
