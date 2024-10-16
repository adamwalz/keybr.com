import { useTheme } from "@keybr/styles";
import { calcLineHeight, calcStyle } from "@keybr/widget";
import { useMemo } from "react";
import * as styles from "./styles.module.less";

export type Styles = ReturnType<typeof useStyles>;

export function useStyles() {
  const { color, font } = useTheme();
  return useMemo(() => {
    use(color, font);
    return {
      frame: calcStyle([styles.frame]),
      headerText: calcStyle([styles.headerText]),
      subheaderText: calcStyle([styles.subheaderText]),
      keyLabel: calcStyle([styles.value, styles.keyFont]),
      value: calcStyle([styles.value]),
      valueLabel: calcStyle([styles.value, styles.valueFont]),
      threshold: calcStyle([styles.threshold]),
      thresholdLabel: calcStyle([styles.threshold, styles.valueFont]),
      complexity: calcStyle([styles.complexity]),
      accuracy: calcStyle([styles.accuracy]),
      speed: calcStyle([styles.speed]),
      histHit: calcStyle([styles.hist_h]),
      histMiss: calcStyle([styles.hist_m]),
      histRatio: calcStyle([styles.hist_r]),
      lineHeight: calcLineHeight(null),
    };
  }, [color, font]);
}

function use(...arg: any) {}
