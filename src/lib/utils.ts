import { CSS_STYLING_MAP } from './constants';
import { CSSPseudoSelectors } from './constants/css-pseudo-selectors';
import {
  TGetBreakpoint,
  TPseudoEntries,
  TStyleEntries,
  TStyles,
} from './stylin.types';

export const getBreakpoint: TGetBreakpoint = (index, theme) => {
  const breakpoints = theme['breakpoints'] ?? ['36em', '48em', '62em', '75em'];

  if (index < breakpoints.length - 1) return breakpoints[index - 1];

  return breakpoints.pop();
};

export const getStyles = (styles: TStyles): TStyleEntries =>
  (Object.entries(styles) as unknown as TStyleEntries).filter((pair) =>
    CSS_STYLING_MAP.includes(pair[0])
  );

export const getPseudos = (styles: TStyles): TPseudoEntries =>
  (Object.entries(styles) as unknown as TPseudoEntries).filter((pair) =>
    Object.keys(CSSPseudoSelectors).includes(pair[0])
  );

export const isFunction = (functionToCheck: unknown): boolean =>
  !!functionToCheck &&
  {}.toString.call(functionToCheck) === '[object Function]';
