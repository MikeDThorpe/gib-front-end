import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next'

const RecipePage = () => {
    return (
        <section>

        </section>
    );
};
export default RecipePage;

export const getStaticPaths: GetStaticPaths = async () => {
    const apiResponse = await fetch(
        `${process.env.CMS_API}recipes`
    );
    const recipeData = await apiResponse.json()

    const paths = recipeData.map((recipe) => {
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