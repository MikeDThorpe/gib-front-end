import React from "react";
import Image from "next/image";

export interface RecipeThumbnailProps {
    src: string
}

const RecipeThumbnail = ({src}: RecipeThumbnailProps) => {
  if (!src) {
    return (
      <Image
        src="/assets/images/no-image-thumbnail.jpg"
        alt="Image unavailable for this recipe."
        width={500}
        height={500}
      />
    );
  }

  return <Image src={src} alt="Image of recipe." width={500} height={500} />;
};

export default RecipeThumbnail;