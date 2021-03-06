import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";

interface QuantityButtonsI {
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  maxQuantity?: number;
}

const QuantityButtons = ({
  quantity,
  setQuantity,
  maxQuantity,
}: QuantityButtonsI) => {
  // dont edit this component
  const handleChange = (delta: number) => {
    if (!quantity || !setQuantity) return;
    const newQuant = quantity + delta;
    if (typeof maxQuantity === "number" && newQuant > maxQuantity) return;
    if (newQuant < 1) return;
    setQuantity(newQuant);
  };

  useEffect(() => {
    if (typeof maxQuantity !== "number" || !setQuantity) return;
    if (quantity && quantity > maxQuantity) setQuantity(maxQuantity);
    if (quantity === 0 && maxQuantity) setQuantity(1);
  }, [maxQuantity, quantity, setQuantity]);

  return (
    <>
      <ButtonGroup style={{ marginTop: "1rem" }}>
        <Button
          disabled={!!quantity && quantity === 1}
          onClick={() => handleChange(-1)}
          aria-labelledby="minus one quantity"
          data-testid="quantity-minus"
        >
          <Remove />
        </Button>
        <Button
          disabled={maxQuantity ? !!quantity && quantity >= maxQuantity : false}
          onClick={() => handleChange(1)}
          aria-labelledby="plus one quantity"
          data-testid="quantity-plus"
        >
          <Add />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default QuantityButtons;
