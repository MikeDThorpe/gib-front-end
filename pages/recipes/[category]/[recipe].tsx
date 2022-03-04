import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'
import Recipe from "../../../Types/Recipe";

export interface RecipePageProps {
    recipe: Recipe;
}

const RecipePage = ({recipe}: RecipePageProps) => {
    return (
        <section>
            <h3>{recipe.title}</h3>
        </section>
    );
};

export default RecipePage;

export const getStaticPaths: GetStaticPaths = async () => {
    const apiResponse = await fetch(
        `${process.env.CMS_API}recipes`
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
        `${process.env.CMS_API}recipes/${context.params!.recipe}`
    );

    if(!apiResponse){
        return {
            notFound: true
        }
    }

    const recipeData = await apiResponse.json();
    return {
        props: {recipe: recipeData}
    }
}