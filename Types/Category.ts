import Recipe from "./Recipe";

export default interface Category {
    id:           number;
    title:        string;
    slug:         string;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    recipes:      Recipe[];
}