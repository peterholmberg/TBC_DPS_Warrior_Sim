import { css } from "@emotion/css";
import { FC, useMemo } from "react";
import { useAppDispatch } from "../../state/hooks";
import { selectSlot, setItem } from "../../state/gearSlice";
import { SelectValue, Slot } from "../../types";

interface Props {
  emptyOption: SelectValue;
  options: SelectValue[] | Record<string, SelectValue[]>;
  label: string;
  slot: Slot;
}

export const ItemSelect: FC<Props> = ({
  emptyOption,
  options,
  label,
  slot,
}) => {
  const styles = useMemo(() => getStyles(), []);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.itemBlock}>
      <label className={styles.itemLabel}>{label}</label>
      <select
        className={styles.select}
        onChange={(event) => {
          dispatch(setItem({ slot: slot, item: event.target.value }));
        }}
        value={selectSlot(slot)}
      >
        <option value={emptyOption.value} className={styles.option}>
          {emptyOption.label}
        </option>
        {Array.isArray(options)
          ? renderOptions(options)
          : renderOptionWithOptionGroups(options, styles)}
      </select>
    </div>
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

type Styles = ReturnType<typeof getStyles>;
