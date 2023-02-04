import { filter, keys, toPairs } from 'ramda';

import { CSS_STYLING_MAP } from './constants';
import { CSSPseudoSelectors } from './constants/css-pseudo-selectors';
import {
  TGetBreakpoint,
  TPseudoKeys,
  TStyleKeys,
  TStyles,
  TStyleValue,
} from './stylin.types';

export const getBreakpoint: TGetBreakpoint = (index, theme) => {
  const breakpoints = theme['breakpoints'] ?? ['36em', '48em', '62em', '75em'];

  if (index < breakpoints.length - 1) return breakpoints[index - 1];

  return breakpoints.pop();
};

export const getStyles = (
  styles: TStyles
): ReadonlyArray<[TStyleKeys, TStyleValue]> =>
  filter((pair) => CSS_STYLING_MAP.includes(pair[0]), toPairs(styles));

export const getPseudos = (
  styles: TStyles
): ReadonlyArray<[TPseudoKeys, TStyles]> =>
  filter((pair) => keys(CSSPseudoSelectors).includes(pair[0]), toPairs(styles));

export const isFunction = (functionToCheck: unknown): boolean =>
  !!functionToCheck &&
  {}.toString.call(functionToCheck) === '[object Function]';
