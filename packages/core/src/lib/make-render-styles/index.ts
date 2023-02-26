import { css } from '@emotion/react';

import {
  ArrayCSSInterpolation,
  PseudoSelectors,
  TPseudoSelector,
  TRenderPseudoSelector,
  TRenderResponsiveStyles,
  TRenderStyles,
  TStyleKeys,
  TStyleValue,
} from '../stylin.types';
import { getPseudos, getStyles } from '../utils';

/**
 * @name makeRenderStyles
 * @description
 * This function render all style to a styled compatible called serializedStyles
 * @param {ReadonlyArray<string>} cssPropertiesList the list of CSS allowed properties
 * @param {PseudoSelectors} cssPseudoSelectorMap the map of CSS pseudo selector allowed properties
 * @param {TRenderResponsiveStyles} renderResponsiveStyle the theme incoming props
 * @param {TRenderResponsiveStyles} renderPseudoSelector the theme defined on provider
 * @returns {TRenderStyles} the styled compatible style
 */
const makeRenderStyles =
  (
    cssPropertiesList: ReadonlyArray<string>,
    cssPseudoSelectorMap: PseudoSelectors,
    renderResponsiveStyle: TRenderResponsiveStyles,
    renderPseudoSelector: TRenderPseudoSelector
  ): TRenderStyles =>
  /**
   * @name renderStyles
   * @description
   * This function render all style to a styled compatible called serializedStyles
   * @param {RenderStylesProps} props the theme incoming props
   * @param {Theme} theme the theme defined on provider
   * @returns {SerializedStyles} the styled compatible style
   */
  (props, theme) =>
    css(
      ...getStyles(props, cssPropertiesList).reduce(
        (acc, [prop, value]) =>
          acc.concat(
            renderResponsiveStyle(
              theme,
              prop as TStyleKeys,
              value as TStyleValue
            )
          ),
        [] as ArrayCSSInterpolation
      ),
      ...getPseudos(props, cssPseudoSelectorMap).reduce(
        (acc, [selector, pseudoStyles]) =>
          acc.concat(renderPseudoSelector(theme, selector, pseudoStyles!)),
        [] as Array<TPseudoSelector>
      )
    );

export default makeRenderStyles;
