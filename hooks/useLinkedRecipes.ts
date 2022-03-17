import { useState, useEffect } from "react";
import Recipe from "../Types/Recipe";

const useLinkedRecipes = (
	contentTitle: string, // category or tag title i.e Vegetarian, Healthy
    focusRecipeId: number // ensures recipe isn't suggested on its own page
) => {
	const [recipes, setRecipes] = useState([]);
	const [fetchingData, setFetchingData] = useState(false);

	const fetchRecipesByCategory = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_CMS_HOST}recipes?category.title=${contentTitle}`
		);
        const recipes = await res.json();
        let filteredRecipes = recipes.filter((recipe: Recipe) => recipe.id !== focusRecipeId)
            .slice(recipes.length - 6, recipes.length);
        setRecipes(filteredRecipes);
	};

	useEffect(() => {
        fetchRecipesByCategory()
    }, [contentTitle]);

	return {
		recipes,
		fetchingData
	};
};

export default useLinkedRecipes;
