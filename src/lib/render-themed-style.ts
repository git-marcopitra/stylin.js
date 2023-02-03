import { THEMED_VALUES_MAP } from './constants/themed-values';
import { TRenderThemedStyle } from './stylin.types';

const renderThemedStyle: TRenderThemedStyle = (theme, property, style) => {
  const themedValue = THEMED_VALUES_MAP[property];

  if (themedValue)
    return (
      (theme[themedValue] as Record<string, string | number>)?.[style] ?? style
    );

  return style;
};

export default renderThemedStyle;
