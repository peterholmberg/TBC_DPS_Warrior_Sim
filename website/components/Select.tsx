import { css } from "@emotion/css";
import { ChangeEvent, FC, useMemo } from "react";
import { SelectValue, SlotName } from "../types";

interface Props {
  emptyOption: SelectValue;
  options: SelectValue[] | Record<string, SelectValue[]>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Select: FC<Props> = ({
  emptyOption,
  options,
  onChange,
  value,
}) => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <select className={styles.select} onChange={onChange} value={value}>
      <option value={emptyOption.value} className={styles.option}>
        {emptyOption.label}
      </option>
      {Array.isArray(options)
        ? renderOptions(options)
        : renderOptionWithOptionGroups(options, styles)}
    </select>
  );
};

function renderOptions(options: SelectValue[]) {
  return options.map((option, index) => {
    return (
      <option key={`${option.value}-${index}`} value={option.value}>
        {option.label}
      </option>
    );
  });
}

function renderOptionWithOptionGroups(
  options: Record<string, SelectValue[]>,
  styles: Styles
) {
  return Object.entries(options).map(([key, options], index) => {
    return (
      <optgroup key={`${key}=${index}`} className={styles.option} label={key}>
        {options.map((option, index) => {
          return (
            <option key={`${option.value}-${index}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </optgroup>
    );
  });
}

const getStyles = () => {
  return {
    select: css`
      max-width: 200px;
    `,
    option: css`
      text-transform: capitalize;
    `,
  };
};

type Styles = ReturnType<typeof getStyles>;
