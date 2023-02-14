import renderProperty from '../render-property';
import {
  ArrayCSSInterpolation,
  TRenderResponsiveStyles,
  TStyleValue,
} from '../stylin.types';
import { getBreakpoint } from '../utils';

/**
 * @name renderResponsiveStyle
 * @description
 * This function renders the responsible style, first checking if the value is
 * an array, if it is not, only render the value, but it is an array, the first
 * position will be the main style style, and the following will be added to the
 * media queries with the respective breakpoints
 * @param {Theme} theme the defined theme, where we will get the user breakpoint
 * @param {TStyleKeys} prop the responsive property
 * @param {TStyleValue} value the value that will change
 * @returns {ArrayCSSInterpolation} the value ready after treatment
 */
const renderResponsiveStyle: TRenderResponsiveStyles = (theme, prop, value) => {
  if (!value) return [];

  if (!Array.isArray(value))
    return [renderProperty(theme, prop, value as string | number)];

  return (value as ReadonlyArray<TStyleValue>).reduce((acc, style, index) => {
    if (!style) return acc;

    if (index == 0) return [...acc, renderProperty(theme, prop, style)];

    const breakpoint = getBreakpoint(index, theme);

    if (!breakpoint) return acc;

    return [
      ...acc,
      {
        [`@media (min-width: ${breakpoint})`]: renderProperty(
          theme,
          prop,
          style
        ),
      },
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [] as Array<any>) as ArrayCSSInterpolation;
};

export default renderResponsiveStyle;
