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
      styles={{ control: (styles) => ({ ...styles, minWidth: "200px" }) }}
      value={value}
      onChange={onChange}
    />
  );
};
