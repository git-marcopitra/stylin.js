import { THEMED_VALUES_MAP } from '../../constants/themed-values';
import type { TRenderThemedStyle } from '../stylin.types';

/**
 * @name renderThemedStyle
 * @description
 * This function extracts from theme the themed style if it exists, else
 * return the value itself.
 * @param {Theme} theme the declared theme
 * @param {CSSPropertiesKeys} property the css attribute
 * @param {TStyleValue} style the value of the attribute
 * @returns {string | number} the value
 */
const renderThemedStyle: TRenderThemedStyle = (theme, property, style) => {
  const themedValue = THEMED_VALUES_MAP[property];

  if (themedValue) return theme[themedValue]?.[style as string] ?? style;

  return style;
};

export default renderThemedStyle;
