import { css } from '@emotion/react';

import renderPseudoSelector from '../render-pseudo-selector';
import renderResponsiveStyle from '../render-responsive-style';
import {
  ArrayCSSInterpolation,
  TPseudoSelector,
  TRenderStyles,
  TStyleKeys,
  TStyleValue,
} from '../stylin.types';
import { getPseudos, getStyles } from '../utils';

/**
 * @name RenderStylesProps
 * @description
 * This function render all style to a styled compatible called serializedStyles
 * @param {RenderStylesProps} props the theme incoming props
 * @param {Theme} theme the theme defined on provider
 * @returns {SerializedStyles} the styled compatible style
 */
const renderStyles: TRenderStyles = (props, theme) =>
  css(
    ...getStyles(props).reduce(
      (acc, [prop, value]) =>
        acc.concat(
          renderResponsiveStyle(theme, prop as TStyleKeys, value as TStyleValue)
        ),
      [] as ArrayCSSInterpolation
    ),
    ...getPseudos(props).reduce(
      (acc, [selector, pseudoStyles]) =>
        acc.concat(renderPseudoSelector(theme, selector, pseudoStyles!)),
      [] as Array<TPseudoSelector>
    )
  );

export default renderStyles;
