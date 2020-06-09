import React from "react";

export default ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  return (
    <select id="color-select" {...{ value, onChange }}>
      <option value={"pink"}>{"pink"}</option>
      <option value={"blue"}>{"blue"}</option>
      <option value={"orange"}>{"orange"}</option>
      <option value={"brown"}>{"brown"}</option>
    </select>
  );
};
