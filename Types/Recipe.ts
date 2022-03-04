import Category from "./Category";

export default interface Recipe {
    id: number;
    title: string;
    category: Category;
    slug: string;
    isFavourite: boolean;
}