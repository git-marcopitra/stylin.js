import {
  ArrayCSSInterpolation,
  PseudoSelectors,
  TPseudoSelector,
  TRenderPseudoSelector,
  TRenderResponsiveStyles,
  TStyleEntries,
} from '../types';

/**
 * @name makeRenderPseudoSelector
 * @description
 * This function convert stylin pseudo selector notation to css native pseudo
 * selector.
 * @param {PseudoSelectors} pseudoSelectors the map of available pseudo selectors
 * @returns {TRenderPseudoSelector} the pseudo selector renderer function
 */
const makeRenderPseudoSelector =
  (
    pseudoSelectors: PseudoSelectors,
    renderResponsiveStyle: TRenderResponsiveStyles
  ): TRenderPseudoSelector =>
  /**
   * @name renderPseudoSelector
   * @description
   * This function convert stylin pseudo selector notation to css native pseudo
   * selector.
   * @param {Theme} theme the defined theme
   * @param {StylinSimplePseudos} selector the pseudo selector
   * @param {TStyles} styles the styles inside selector
   * @returns {TPseudoSelector} the pseudo selector with styles css compatible
   */
  (theme, selector, styles) =>
    ({
      [pseudoSelectors[selector]]: (
        Object.entries(styles) as unknown as TStyleEntries
      ).reduce(
        (acc, [prop, value]) => [
          ...acc,
          ...renderResponsiveStyle(theme, prop, value),
        ],
        [] as ArrayCSSInterpolation
      ),
    } as TPseudoSelector);

export default makeRenderPseudoSelector;
