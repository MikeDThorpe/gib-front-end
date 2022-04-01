import React from 'react';

import Image from "next/image";
import Link from "next/link";

import Recipe from '../../../Types/Recipe';

export interface RecipeMetaProps {
  recipe: Recipe;
}

const RecipeMeta = ({recipe}: RecipeMetaProps) => {
    return (
      <section className="recipe_meta">
        <h2 className="bold">{recipe.title}</h2>
        <div className="recipe_meta_title_underline mt-3 mb-4"></div>
        <h5 className="mb-4">{recipe.description}</h5>
        <section className="recipe_meta_grid">
          <div className="d-flex align-items-center">
            <Image
              src={"/media/icons/utensils-solid.svg"}
              height={20}
              width={20}
              alt="kitchen utensils icon"
            />
            <h5 className="px-2 bold">{recipe.category.title.toUpperCase()} RECIPE</h5>
          </div>
          <div className="d-flex align-items-center">
            <Image
              src={"/media/icons/tags-solid.svg"}
              height={20}
              width={20}
              alt="shopping tags icon"
            />
            {recipe.tags.map((tag, index) => (
              <Link key={tag.id} href={`/recipes/tags/${tag.slug}`}>
                <a>
                  <h5 className="mx-1 my-0 bold">
                    {tag.title.toUpperCase()}
                    {index === recipe.tags.length - 1 ? "" : ","}
                  </h5>
                </a>
              </Link>
            ))}
          </div>
          <div className="d-flex align-items-center">
            <Image
              src={"/media/icons/user-solid.svg"}
              height={20}
              width={20}
              alt="a person icon"
            />
            <h5 className="px-2 bold">
              FEEDS {recipe.serves} {recipe.serves == 1 ? "PERSON" : "PEOPLE"}
            </h5>
          </div>
          <div className="d-flex align-items-center">
            <Image
              src={"/media/icons/clock-solid.svg"}
              height={20}
              width={20}
              alt="a clock icon"
            />
            <h5 className="px-2 bold">READY IN {recipe.cook_time} MINUTES</h5>
          </div>
        </section>
      </section>
    );
}

export default RecipeMeta;