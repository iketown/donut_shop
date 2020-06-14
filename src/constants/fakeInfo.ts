export const fakeDonut = {
  frostingColor: "brown",
  glazeFlavor: "vanilla",
  sprinkles: true,
  id: "donut1",
};

export const fakeBox: Box = {
  id: "042",
  donuts: [
    fakeDonut,
    {
      frostingColor: "blue",
      glazeFlavor: "strawberry",
      sprinkles: false,
      id: "donut2",
    },
  ],
  selectedId: "",
};
