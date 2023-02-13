import { CUSTOM_PROPERTY_MAP, StylinCustomProperties } from '../constants';
import renderThemedStyle from '../render-themed-style';
import {
  CSSInterpolation,
  StylinCustomPropertiesType,
  TRenderProperty,
} from '../stylin.types';

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
const renderProperty: TRenderProperty = (theme, prop, value) => {
  const stylinProperty =
    StylinCustomProperties[prop as StylinCustomPropertiesType];

  if (stylinProperty)
    return CUSTOM_PROPERTY_MAP[stylinProperty].reduce(
      (acc, property) => ({
        ...acc,
        [property]: renderThemedStyle(theme, property, value),
      }),
      {}
    ) as CSSInterpolation;

  return { [prop]: renderThemedStyle(theme, prop, value) } as CSSInterpolation;
};

export default renderProperty;
