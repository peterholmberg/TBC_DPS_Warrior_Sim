import { css } from "@emotion/css";
import { FC, useMemo } from "react";
import { SelectValue } from "../../types";

interface Props {
  emptyOption: SelectValue;
  options: SelectValue[] | Record<string, SelectValue[]>;
}

export const ItemSelect: FC<Props> = ({ emptyOption, options }) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <select className={styles.select}>
      <option value={emptyOption.value} className={styles.option}>
        {emptyOption.label}
      </option>
      {Array.isArray(options)
        ? options.map((option, index) => {
            return (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </option>
            );
          })
        : null}
      {!Array.isArray(options)
        ? Object.entries(options).map(([key, options], index) => {
            return (
              <optgroup
                key={`${key}=${index}`}
                className={styles.option}
                label={key}
              >
                {options.map((option, index) => {
                  return (
                    <option
                      key={`${option.value}-${index}`}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </optgroup>
            );
          })
        : null}
    </select>
  );
};

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
