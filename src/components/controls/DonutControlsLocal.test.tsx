import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import DonutControlsLocal from "./DonutControlsLocal";
import getRandomDonut from "../../helpers/getRandomDonut";

jest.mock("../../helpers/getRandomDonut");
const fakeGetRandomDonut = getRandomDonut as jest.Mock<Donut>;

test("glaze radio buttons work", () => {
  const { getByLabelText, getByTestId, queryByTestId } = render(
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

test("sprinkles checkbox is working", () => {
  const { getByLabelText, queryByTestId } = render(<DonutControlsLocal />);
  const sprinklesCheckbox = getByLabelText(/sprinkles/i);

  expect(queryByTestId("sprinkles")).toBeFalsy();
  user.click(sprinklesCheckbox);
  expect(queryByTestId("sprinkles")).toBeTruthy();
  user.click(sprinklesCheckbox);
  expect(queryByTestId("sprinkles")).toBeFalsy();
});

test("frosting select is working", () => {
  const { getByLabelText, getByTestId } = render(<DonutControlsLocal />);
  const frostingSelect = getByLabelText(/frosting/i);
  const frosting = getByTestId("frosting");
  user.selectOptions(frostingSelect, "blue");
  expect(frosting).toHaveAttribute("color", "blue");

  user.selectOptions(frostingSelect, "pink");
  expect(frosting).toHaveAttribute("color", "pink");

  user.selectOptions(frostingSelect, "orange");
  expect(frosting).toHaveAttribute("color", "orange");

  user.selectOptions(frostingSelect, "brown");
  expect(frosting).toHaveAttribute("color", "brown");
});

test("random button works", () => {
  const { getByText, getByTestId } = render(<DonutControlsLocal />);
  const randomButton = getByText(/random/i);

  fakeGetRandomDonut
    .mockReturnValueOnce({
      frostingColor: "pink",
      glazeFlavor: "chocolate",
      sprinkles: true,
    })
    .mockReturnValueOnce({
      frostingColor: "blue",
      glazeFlavor: "strawberry",
      sprinkles: false,
    });

  user.click(randomButton);
  expect(getByTestId("frosting")).toHaveAttribute("color", "pink");
  expect(getByTestId("glaze")).toHaveAttribute("color", "chocolate");
  user.click(randomButton);
  expect(getByTestId("frosting")).toHaveAttribute("color", "blue");
  expect(getByTestId("glaze")).toHaveAttribute("color", "strawberry");
});
