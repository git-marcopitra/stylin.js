import {
  makeRenderResponsiveStyle,
  TRenderResponsiveStyles,
} from '@stylin.js/core';

import { DEFAULT_BREAKPOINTS } from '../../constants/breakpoints';
import renderProperty from '../render-property';

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
const renderResponsiveStyle: TRenderResponsiveStyles =
  makeRenderResponsiveStyle(DEFAULT_BREAKPOINTS, renderProperty);

export default renderResponsiveStyle;
