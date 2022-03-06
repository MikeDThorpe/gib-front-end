import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Recipe from "../../../Types/Recipe";
import BreadCrumbs from "../../../components/global/BreadCrumbs";
import RecipeHeader from "../../../components/page/Recipe/RecipeHeader";

export interface RecipePageProps {
    recipe: Recipe;
}

const RecipePage = ({recipe}: RecipePageProps) => {
    return (
        <section>
            <BreadCrumbs 
                data={
                    [
                        {title: "Recipes", url: "/recipes"},
                        {title: `${recipe.category.title}`, url: `/recipes/${recipe.category.title}`},
                        {title: `${recipe.title}`, url: `/recipes/${recipe.category.title}/${recipe.slug}`}
                    ]
                }
            />
            <RecipeHeader recipe={recipe} />
        </section>
    );
};

export default RecipePage;

export const getStaticPaths: GetStaticPaths = async () => {
    const apiResponse = await fetch(
        `http://localhost:1337/recipes`
    );
    const recipeData = await apiResponse.json()

    const paths = recipeData.map((recipe: Recipe) => {
        return {
            params: {
                category: recipe.category.slug,
                recipe: recipe.slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async (context) => {
    const apiResponse = await fetch(
        `http://localhost:1337/recipes/${context.params!.recipe}`
      );
      const recipeData = await apiResponse.json();
    
      return {
        props: { recipe: recipeData },
      };
}