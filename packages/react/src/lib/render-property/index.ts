import { makeRenderProperty } from '@stylin.js/core';

import { CUSTOM_PROPERTY_MAP, StylinCustomProperties } from '../../constants';
import renderThemedStyle from '../render-themed-style';
import { TRenderProperty } from '../stylin.types';

/**
 * @name renderProperty
 * @description
 * This function check if a property is custom or native and if
 * it is custom convert them to native one.
 * @param {Theme} theme the defined theme
 * @param {TStyleKeys} prop the property to render
 * @param {TStyleValue} value the value of that property
 * @returns {CSSInterpolation} the target object ready to style
 */
const renderProperty: TRenderProperty = makeRenderProperty(
  CUSTOM_PROPERTY_MAP,
  StylinCustomProperties,
  renderThemedStyle
);

export default renderProperty;
