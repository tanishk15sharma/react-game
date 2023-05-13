import React from "react";

const Box = ({ isClicked, id, onBoxClick }) => {
  if (id) {
    return (
      <div
        onClick={() => onBoxClick(id)}
        className="box"
        style={{ backgroundColor: isClicked ? "green" : "white" }}
      ></div>
    );
  }

  return <div className="emptyBox"></div>;
};

export { Box };
