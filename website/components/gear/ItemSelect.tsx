import { css } from "@emotion/css";
import { FC, useMemo } from "react";
import { SelectValue } from "../../types";

interface Props {
  emptyOption: SelectValue;
  options: SelectValue[] | Record<string, SelectValue[]>;
  label: string;
}

export const ItemSelect: FC<Props> = ({ emptyOption, options, label }) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div className={styles.itemBlock}>
      <label className={styles.itemLabel}>{label}</label>
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
    </div>
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
    itemBlock: css`
      margin-bottom: 4px;
    `,
    itemLabel: css`
      display: block;
      font-size: 14px;
      font-weight: bold;
    `,
  };
};
