import React from "react";
import Link from "next/link";
import useLinkedRecipes from "../../hooks/useLinkedRecipes";
import RecipeCard from "../page/Recipe/RecipeCard";

export interface LinkedCategoryRecipesProps {
	categoryTitle: string;
	focusRecipeId: number;
}

export const LinkedCategoryRecipes = ({
	categoryTitle,
	focusRecipeId,
}: LinkedCategoryRecipesProps) => {
	const { recipes, fetchingData } = useLinkedRecipes(categoryTitle, focusRecipeId)
	return (
		<section className="border-top">
			<h2 className="my-4">More {categoryTitle} Recipes</h2>
			{fetchingData ? (
				<div>
					<h3>Loading...</h3>
				</div>
			) : (
				<section className="recipe_card_grid">
					{recipes.map((recipe, index) => {
						return (
							<div key={index}>
								<RecipeCard recipe={recipe} />
							</div>
						);
					})}
				</section>
			)}
			<Link href={`/recipes/${categoryTitle.toLowerCase()}`}>
				<button className="button button-main d-block mx-auto mt-5">
					More Vegetarian Recipes
				</button>
			</Link>
		</section>
	);
};
