import Image from "next/image";
import Link from "next/link";

interface CategoryLinksProps {
  categories: { id: number; title: string }[];
}

const CategoryLinks = ({ categories }) => {
  const setIconUrl = (categoryTitle) => {
    switch (categoryTitle) {
      case "Vegetarian":
        return "pepper-hot-solid.svg";
      case "Vegan":
        return "seedling-solid.svg";
      case "Meat":
        return "drumstick-solid.svg";
      case "Seafood":
        return "fish-solid.svg";
    }
  };

  return (
    <section className="category-link-container mt-5">
      {categories.map((category) => {
        return (
          <Link
            key={`${category.id}`}
            href={`/recipes/${category.title.toLowerCase()}`}
            passHref
          >
            <div className="category-link">
              <div className="category-link-image">
                <Image
                  src={`/assets/icons/${setIconUrl(category.title)}`}
                  alt={
                    setIconUrl(category.title)?.substring(
                      0,
                      setIconUrl(category.title)?.length
                    ) + " graphical icon"
                  }
                  height={60}
                  width={60}
                />
              </div>
              <h4 className="text-center mt-3">{category.title} Recipes</h4>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryLinks;
