import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Recipe from "../../../Types/Recipe";
import BreadCrumbs from "../../../components/global/BreadCrumbs";
import RecipeHeader from "../../../components/page/Recipe/RecipeHeader";
import RecipeBody from "../../../components/page/Recipe/RecipeBody";
import { LinkedCategoryRecipes } from "../../../components/features/LinkedCategoryRecipes";
import PageSEO from "../../../components/global/PageSEO";

export interface RecipePageProps {
	recipe: Recipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
	return (
		<>
			<PageSEO
				title={recipe.title}
				description={recipe.description}
				category={recipe.category.title}
			/>
			<div className="mt-4">
				<BreadCrumbs
					data={[
						{
							title: "Recipes",
							url: "/recipes",
						},
						{
							title: `${recipe.category.title}`,
							url: `/recipes/${recipe.category.title}`,
						},
						{
							title: `${recipe.title}`,
							url: `/recipes/${recipe.category.title}/${recipe.slug}`,
						},
					]}
				/>
			</div>
			<RecipeHeader recipe={recipe} />
			<RecipeBody recipe={recipe} />
			<LinkedCategoryRecipes
				categoryTitle={recipe.category.title}
				focusRecipeId={recipe.id}
			/>
		</>
	);
};

export default RecipePage;

export const getStaticPaths: GetStaticPaths = async () => {
	const apiResponse = await fetch(`${process.env.CMS_HOST}recipes`);
	const recipeData = await apiResponse.json();

	const paths = recipeData.map((recipe: Recipe) => {
		return {
			params: {
				category: recipe.category.slug,
				recipe: recipe.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const apiResponse = await fetch(
		`${process.env.CMS_HOST}recipes/${context.params!.recipe}`
	);
	const recipeData = await apiResponse.json();

	return {
		props: {
			recipe: recipeData,
		},
	};
};
