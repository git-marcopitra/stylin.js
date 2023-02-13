import { CSSPseudoSelectors } from '../constants';
import renderResponsiveStyle from '../render-responsive-style';
import {
  ArrayCSSInterpolation,
  TPseudoSelector,
  TRenderPseudoSelector,
  TStyleEntries,
} from '../stylin.types';

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
const renderPseudoSelector: TRenderPseudoSelector = (theme, selector, styles) =>
  ({
    [CSSPseudoSelectors[selector]]: (
      Object.entries(styles) as unknown as TStyleEntries
    ).reduce(
      (acc, [prop, value]) => [
        ...acc,
        ...renderResponsiveStyle(theme, prop, value),
      ],
      [] as ArrayCSSInterpolation
    ),
  } as TPseudoSelector);

export default renderPseudoSelector;
