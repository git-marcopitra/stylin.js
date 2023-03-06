import type { TRenderVariant } from '../types';

/**
 * @name renderVariant
 * @description
 * Is a function that que returns another function that find on the theme a
 * specific scale to fill the component style section
 * @param {IVariantProperty} variant is a object param composed by scale (
 * which will declare on the theme) and property (which will be user will
 * write on the component)
 * @returns {TVariantStyleFn} Function that render styles from scale on the
 * theme
 */
const renderVariant: TRenderVariant =
  ({ scale, property }) =>
  ({ theme = {}, ...props }) =>
    theme[scale]?.[props[property]] ?? {};

export default renderVariant;
