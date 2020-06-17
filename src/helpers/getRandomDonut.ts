import shortid from "shortid";
import { donutOptions } from "../constants/donutOptions";

type attrType = "frostingColor" | "glazeFlavor" | "sprinkles";

const getRandomAttr = (attr: attrType) => {
  const opts = donutOptions[attr];
  const index = Math.floor(Math.random() * opts.length);
  return opts[index];
};

export const getRandomDonut: () => Donut = () => ({
  id: shortid.generate(),
  frostingColor: getRandomAttr("frostingColor") as string,
  glazeFlavor: getRandomAttr("glazeFlavor") as string,
  sprinkles: getRandomAttr("sprinkles") as boolean,
});

export default getRandomDonut;
