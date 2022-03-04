import Recipe from "./Recipe";

export default interface Tag {
    id: number;
    title: string;
    slug: string;
    recipes: Recipe[];
}