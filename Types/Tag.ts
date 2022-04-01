import Recipe from "./Recipe";

export default interface Tag {
  id: number;
  title: string;
  recipes: Recipe[];
  slug: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}
