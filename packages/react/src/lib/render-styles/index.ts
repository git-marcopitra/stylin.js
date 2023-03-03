import { makeRenderStyles, TRenderStyles } from '@stylin.js/core';

import { CSS_PSEUDO_SELECTORS, CSS_STYLING_MAP } from '../../constants';
import renderPseudoSelector from '../render-pseudo-selector';
import renderResponsiveStyle from '../render-responsive-style';

/**
 * @name RenderStylesProps
 * @description
 * This function render all style to a styled compatible called serializedStyles
 * @param {RenderStylesProps} props the theme incoming props
 * @param {Theme} theme the theme defined on provider
 * @returns {SerializedStyles} the styled compatible style
 */
const renderStyles: TRenderStyles = makeRenderStyles(
  CSS_STYLING_MAP,
  CSS_PSEUDO_SELECTORS,
  renderResponsiveStyle,
  renderPseudoSelector
);

export default renderStyles;
