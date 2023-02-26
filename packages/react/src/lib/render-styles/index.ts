import { makeRenderStyles } from '@stylin.js/core';

import { CSS_PROPERTIES_ARRAY } from '../../constants';
import renderPseudoSelector from '../render-pseudo-selector';
import renderResponsiveStyle from '../render-responsive-style';
import { TRenderStyles } from '../stylin.types';
import { CSSPseudoSelectors } from './../../constants/css-pseudo-selectors';

/**
 * @name RenderStylesProps
 * @description
 * This function render all style to a styled compatible called serializedStyles
 * @param {RenderStylesProps} props the theme incoming props
 * @param {Theme} theme the theme defined on provider
 * @returns {SerializedStyles} the styled compatible style
 */
const renderStyles: TRenderStyles = makeRenderStyles(
  CSS_PROPERTIES_ARRAY,
  CSSPseudoSelectors,
  renderResponsiveStyle,
  renderPseudoSelector
);

export default renderStyles;
