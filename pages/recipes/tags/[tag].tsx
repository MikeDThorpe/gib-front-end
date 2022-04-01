import Tag from "../../../Types/Tag";
import { GetStaticProps, GetStaticPaths } from "next";
import RecipesGrid from "../../../components/features/RecipesGrid";

interface TagPageProps {
  tag: Tag;
}

const TagPage = ({ tag }: TagPageProps) => {
  return (
    <>
      <h2 className="my-5 text-center bold">Recipes Tagged: {tag.title}</h2>
      {/* <RecipesGrid recipes={tag.recipes} displayAll={true} /> */}
    </>
  );
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const apiResponse = await fetch(`${process.env.CMS_HOST}tags`);
  const tagData = await apiResponse.json();

  const paths = tagData.map((tag: Tag) => {
    return {
      params: {
        tag: tag.slug,
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
    `${process.env.CMS_HOST}tags/${context.params!.tag}`
  );
  const tagData = await apiResponse.json();

  return {
    props: {
      tag: tagData,
    },
  };
};
