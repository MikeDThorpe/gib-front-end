import Category from "./Category";
import Tag from "./Tag";

export interface Recipe {
    id:           number;
    title:        string;
    description:  string;
    ingredients:  string;
    instructions: string;
    serves:       number;
    favourite:    boolean;
    category:     Category;
    slug:         string;
    cook_time:    string;
    published_at: Date;
    created_at:   Date;
    updated_at:   Date;
    tags:         Tag[];
}