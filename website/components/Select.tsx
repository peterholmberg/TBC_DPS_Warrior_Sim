import ReactSelect from "react-select";
import { FC } from "react";
import { GroupedSelectValue, SelectValue } from "../types";

interface Props {
  emptyOption: SelectValue;
  options: SelectValue[] | GroupedSelectValue[];
  onChange: (value: SelectValue) => void;
  value: SelectValue;
}

export const Select: FC<Props> = ({
  emptyOption,
  options,
  onChange,
  value,
}) => {
  return (
    <ReactSelect<SelectValue, false, GroupedSelectValue>
      options={options}
      defaultValue={emptyOption}
      styles={{
        control: (styles) => ({
          ...styles,
          minWidth: "200px",
          minHeight: "32px",
        }),
        valueContainer: (styles) => ({
          ...styles,
          height: "20px",
          padding: "0 8px",
        }),
        input: (styles) => ({
          ...styles,
          padding: 0,
        }),
      }}
      value={value}
      onChange={onChange}
    />
  );
};
