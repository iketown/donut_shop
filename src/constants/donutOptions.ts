import shortid from "shortid";

export const donutOptions = {
  frostingColor: ["blue", "pink", "orange", "brown"],
  glazeColor: ["chocolate", "strawberry", "vanilla", "none"],
  sprinkles: [true, false],
};

type attrType = "frostingColor" | "glazeColor" | "sprinkles";

const getRandomAttr = (attr: attrType) => {
  const opts = donutOptions[attr];
  const index = Math.floor(Math.random() * opts.length);
  return opts[index];
};

export const getRandomDonut: () => Donut = () => ({
  id: shortid.generate(),
  frostingColor: getRandomAttr("frostingColor") as string,
  glazeColor: getRandomAttr("glazeColor") as string,
  sprinkles: getRandomAttr("sprinkles") as boolean,
});

export const prices = {
  donut: 1.1,
  sprinkles: 0.25,
  taxRate: 0.07,
};