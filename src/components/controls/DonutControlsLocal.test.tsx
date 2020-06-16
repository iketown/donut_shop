import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import DonutControlsLocal from "./DonutControlsLocal";

test("glaze radio buttons work", () => {
  const { getByLabelText, getByTestId, queryByTestId, debug } = render(
    <DonutControlsLocal />
  );
  const chocolateRadio = getByLabelText(/chocolate/i);
  const strawberryRadio = getByLabelText(/strawberry/i);
  const noneRadio = getByLabelText(/none/i);
  const glaze = getByTestId("glaze");

  user.click(chocolateRadio);
  expect(glaze).toHaveAttribute("color", "chocolate");
  user.click(strawberryRadio);
  expect(glaze).toHaveAttribute("color", "strawberry");
  user.click(noneRadio);
  expect(queryByTestId("glaze")).toBeFalsy();
});
