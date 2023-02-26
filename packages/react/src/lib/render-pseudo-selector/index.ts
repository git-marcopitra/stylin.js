import { makeRenderPseudoSelector } from '@stylin.js/core';

import { CSSPseudoSelectors } from '../../constants';
import renderResponsiveStyle from '../render-responsive-style';
import { TRenderPseudoSelector } from '../stylin.types';

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
const renderPseudoSelector: TRenderPseudoSelector = makeRenderPseudoSelector(
  CSSPseudoSelectors,
  renderResponsiveStyle
);

export default renderPseudoSelector;
