import {
  PseudoSelectors,
  TGetBreakpoint,
  TGetStyles,
  TPseudoEntries,
  TStyleEntries,
  TStyles,
} from '../types';

/**
 * @name getBreakpoint
 * @description
 * This function returns the target breakpoint, where first
 * position (0) correspond to the base style and breakpoints starts from
 * second position (1).
 * @param {number} index position where comes the styles from style array
 * @param {Theme} theme where comes the custom breakpoints list
 * @returns {string} target breakpoint
 */
export const getBreakpoint: TGetBreakpoint = (
  index,
  defaultBreakpoints,
  theme
) => {
  const breakpoints = theme['breakpoints'] ?? defaultBreakpoints;

  return breakpoints[index - 1];
};
/**
 * @name getStyles
 * @description
 * This function will convert the styles object to a pair entry, and
 * then, filter them to get the real css attributes from CSS_STYLING_MAP.
 * @param {TStyles} styles all properties coming from component
 * @param {TStyles} styles all properties coming from component
 * @returns {TStyleEntries}
 */
export const getStyles: TGetStyles = (
  styles,
  cssPropertiesList: ReadonlyArray<string>
) =>
  (Object.entries(styles) as unknown as TStyleEntries).filter((pair) =>
    cssPropertiesList.includes(pair[0])
  );

/**
 * @name getPseudos
 * @description
 * This function will convert the styles object to a pair entry, and
 * then, filter them to get css pseudo selectors from CSSPseudoSelectors
 * keys.
 * @param {TStyles} styles all properties coming from component
 * @param {PseudoSelectors} pseudoSelectors the pseudo selectors map
 * @returns {TPseudoEntries}
 */
export const getPseudos = (
  styles: TStyles,
  pseudoSelectors: PseudoSelectors
): TPseudoEntries =>
  (Object.entries(styles) as unknown as TPseudoEntries).filter((pair) =>
    Object.keys(pseudoSelectors).includes(pair[0])
  );

/**
 * @name isFunction
 * @description
 * This function simply check if the incoming argument is a function or not.
 * @param {unknown} functionToCheck the argument that we want to verify
 * @returns {boolean} the result of the validation
 */
export const isFunction = (functionToCheck: unknown): boolean =>
  !!functionToCheck &&
  {}.toString.call(functionToCheck) === '[object Function]';
