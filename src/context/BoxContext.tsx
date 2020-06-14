import React, { createContext, useContext, useState } from "react";

type BoxContextType = {
  donuts: Donut[];
  setDonuts: React.Dispatch<React.SetStateAction<Donut[]>>;
};

const BoxContext = createContext<BoxContextType>({
  donuts: [],
  setDonuts: () => {},
});

export const BoxContextProvider = (props: any) => {
  const [donuts, setDonuts] = useState<Donut[]>([]);

  return <BoxContext.Provider value={{ donuts, setDonuts }} {...props} />;
};

export const useBoxContext = () => {
  const ctx = useContext(BoxContext);
  return ctx;
};
