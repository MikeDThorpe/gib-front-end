import React from "react";

export interface RecipeInstructionsProps {
  instructions: string;
}

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  
    // data is send with markdown syntax - split the instructions string on every new lin character i.e \n
    const outputInstructions = () => {
    return instructions.split("\n").map((instruction, index) => {
      return (
        <div key={index} className="mb-5 d-flex">
          <h3 className="me-3">{index + 1}</h3>
          <p>{instruction}</p>
        </div>
      );
    });
  };

  return (
    <section className="mb-4">
      <div className="border-bottom pb-4">
        <h2>How To Make It</h2>
      </div>
      <article className="pt-4">{outputInstructions()}</article>
    </section>
  );
};

export default RecipeInstructions;
