export const fakeDonut = {
  frostingColor: "blue",
  glazeColor: "chocolate",
  sprinkles: true,
  id: "donut1",
};

export const fakeBox: Box = {
  id: "0001",
  donuts: [
    fakeDonut,
    {
      frostingColor: "blue",
      glazeColor: "strawberry",
      sprinkles: true,
      id: "donut2",
    },
  ],
  selectedId: "",
};
