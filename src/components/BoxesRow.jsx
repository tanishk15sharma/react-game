import React from "react";
import { Box } from "./Box";

const BoxesRow = ({ rowBoxesState, onBoxClick }) => {
  return (
    <div className="row">
      {rowBoxesState.map((box, index) => (
        <Box
          key={index}
          id={box?.id}
          isClicked={box?.isClicked}
          onBoxClick={onBoxClick}
        />
      ))}
    </div>
  );
};

export { BoxesRow };
