import {
  CSSInterpolation,
  CustomProperties,
  StylinCustomPropertiesType,
  TRenderProperty,
  TRenderThemedStyle,
} from '../types';
import { PropertyMap } from '../types';

/**
 * @name makeRenderProperty
 * @description
 * This function check if a property is custom or native and if
 * it is custom convert them to native one.
 * @param {PropertyMap} propertyMap the base properties to render
 * @param {CustomProperties} customProperties the custom properties to render
 * @returns {TRenderProperty} the target object ready to style
 */
const makeRenderProperty =
  (
    propertyMap: PropertyMap,
    customProperties: CustomProperties,
    renderThemedStyle: TRenderThemedStyle
  ): TRenderProperty =>
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
  (theme, prop, value) => {
    const stylinProperty = customProperties[prop as StylinCustomPropertiesType];

    if (stylinProperty)
      return propertyMap[stylinProperty].reduce(
        (acc, property) => ({
          ...acc,
          [property]: renderThemedStyle(theme, property, value),
        }),
        {}
      ) as CSSInterpolation;

    return {
      [prop]: renderThemedStyle(theme, prop, value),
    } as CSSInterpolation;
  };

export default makeRenderProperty;
