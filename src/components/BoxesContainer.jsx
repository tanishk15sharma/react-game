import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BoxesRow } from "./BoxesRow";

const getInitialState = (config) => {
  return config.map((row) => {
    return row.map((isBox) => {
      if (isBox) {
        return { id: uuidv4(), isClicked: false };
      } else {
        return null;
      }
    });
  });
};

const BoxesContainer = ({ config }) => {
  const [boxesState, setBoxesState] = useState(() => getInitialState(config));
  const [clickOrder, setClickOrder] = useState([]);
  const onBoxClick = (id) => {
    setBoxesState((previousValue) =>
      previousValue.map((boxRow) =>
        boxRow.map((box) =>
          box?.id === id ? { ...box, isClicked: true } : box
        )
      )
    );

    setClickOrder((previousData) => [...new Set([...previousData, id])]);
  };

  const totalBoxes = boxesState.reduce((boxesQuantity, currRow) => {
    return boxesQuantity + currRow.filter((box) => box).length;
  }, 0);

  useEffect(() => {
    if (clickOrder.length === totalBoxes) {
      for (let i = 0; i < totalBoxes; i++) {
        const boxId = clickOrder[i];
        setTimeout(() => {
          resetBoxColor(boxId);
          if (i === totalBoxes - 1) {
            setClickOrder([]);
          }
        }, (i + 1) * 1000);
      }
    }
  }, [clickOrder]);

  const resetBoxColor = (id) => {
    setBoxesState((previousValue) =>
      previousValue.map((boxRow) =>
        boxRow.map((box) =>
          box?.id === id ? { ...box, isClicked: false } : box
        )
      )
    );
  };

  return (
    <div>
      {boxesState.map((row, index) => (
        <BoxesRow key={index} rowBoxesState={row} onBoxClick={onBoxClick} />
      ))}
    </div>
  );
};

export { BoxesContainer };
