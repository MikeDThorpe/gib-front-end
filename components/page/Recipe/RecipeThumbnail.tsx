import React from "react";
import Image from "next/image";

export interface RecipeThumbnailProps {
  src: string;
}

const RecipeThumbnail = ({ src }: RecipeThumbnailProps) => {
  if (!src) {
    return (
      <Image
        src="/assets/images/no-image-thumbnail.jpg"
        alt="Image unavailable for this recipe."
        layout="fill"
        priority
      />
    );
  }

  return <Image src={src} alt="Image of recipe." layout="fill" priority />;
};

export default RecipeThumbnail;
