import type { ThemeValuesMap, TRenderThemedStyle } from '../types';

/**
 * @name renderThemedStyle
 * @description
 * This function extracts from theme the themed style if it exists, else
 * return the value itself.
 * @param {ThemeValuesMap} themeValuesMap the map of properties and each theme correspondence
 * @returns {TRenderThemedStyle} the function to render themed style
 */
const renderThemedStyle =
  (themeValuesMap: ThemeValuesMap): TRenderThemedStyle =>
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
  (theme, property, style) => {
    const themedValue = themeValuesMap[property];

    if (themedValue) return theme[themedValue]?.[style as string] ?? style;

    return style;
  };

export default renderThemedStyle;
