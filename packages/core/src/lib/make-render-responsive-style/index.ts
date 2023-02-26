import {
  ArrayCSSInterpolation,
  TRenderProperty,
  TRenderResponsiveStyles,
  TStyleValue,
} from '../types';
import { getBreakpoint } from '../utils';

// TODO: update JSDocs

/**
 * @name makeRenderResponsiveStyle
 * @description
 * This function renders the responsible style, first checking if the value is
 * an array, if it is not, only render the value, but it is an array, the first
 * position will be the main style style, and the following will be added to the
 * media queries with the respective breakpoints
 * @param {ReadonlyArray<string>} defaultBreakpoints a list with ascending breakpoints
 * @param {TRenderProperty} renderProperty the function to render properties
 * @returns {TRenderResponsiveStyles} the function to render responsive styles
 */
const makeRenderResponsiveStyle =
  (
    defaultBreakpoints: ReadonlyArray<string>,
    renderProperty: TRenderProperty
  ): TRenderResponsiveStyles =>
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
  (theme, prop, value): ArrayCSSInterpolation => {
    if (!value) return [];

    if (!Array.isArray(value))
      return [renderProperty(theme, prop, value as string | number)];

    return (value as ReadonlyArray<TStyleValue>).reduce((acc, style, index) => {
      if (!style) return acc;

      if (index == 0) return [...acc, renderProperty(theme, prop, style)];

      const breakpoint = getBreakpoint(index, defaultBreakpoints, theme);

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

export default makeRenderResponsiveStyle;
