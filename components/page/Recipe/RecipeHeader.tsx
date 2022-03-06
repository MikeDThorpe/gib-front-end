// @flow
import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import RecipeThumbnail from './RecipeThumbnail';
import Recipe from '../../../Types/Recipe';

export interface RecipeHeaderProps {
    recipe: Recipe
}

const RecipeHeader = ({recipe}: RecipeHeaderProps) => {
  return (
    <section className="mt-4">
        <RecipeThumbnail src={""} />
        <section>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <section>
            <div className="d-flex align-items-center">
              <Image src={"/media/icons/utensils-solid.svg"} height={30} width={30} alt="kitchen utensils icon"/>
              <h5>{recipe.category.title} Recipe</h5>
            </div>
            <div className="d-flex align-items-center">
              <Image src={"/media/icons/tags-solid.svg"} height={30} width={30} alt="shopping tags icon"/>
              {recipe.tags.map((tag) => (
                  <Link key={tag.id} href={`/recipes/tags/${tag.title}`}>
                    <h5 className="mx-1 my-0 link">{tag.title},</h5>
                  </Link>
                ))}
            </div>
            <div className="d-flex align-items-center">
              <Image src={"/media/icons/user-solid.svg"} height={30} width={30} alt="a person icon"/>
              <h5>Feeds {recipe.serves} {recipe.serves == 1 ? "person" : "people"}</h5>
            </div>
            <div className="d-flex align-items-center">
              <Image src={"/media/icons/clock-solid.svg"} height={30} width={30} alt="a clock icon"/>
              <h5>Ready in {recipe.cook_time} minutes</h5>
            </div>
          </section>
        </section>
    </section>
  );
};

export default RecipeHeader;