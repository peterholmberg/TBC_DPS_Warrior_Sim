import { css } from "@emotion/css";
import { useMemo } from "react";
import presets from "../../data/presets";
import { setPreset } from "../../state/gearSlice";
import { useAppDispatch } from "../../state/hooks";

export const Presets = () => {
  const styles = useMemo(() => getStyles(), []);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.presetRow}>
      {presets.map((preset, index) => {
        return (
          <button
            key={`${preset.label}-${index}`}
            type="button"
            onClick={() => dispatch(setPreset(preset.items))}
            className={styles.presetButton}
          >
            {preset.label}
          </button>
        );
      })}
    </div>
  );
};

const getStyles = () => {
  return {
    presetRow: css`
      display: flex;
      flex-wrap: wrap;
    `,
    presetButton: css`
      margin-right: 4px;
      margin-bottom: 4px;
    `,
  };
};
