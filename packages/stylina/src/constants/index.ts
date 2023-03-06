import { StylinControllersKey } from '../lib/types';

export const NON_STYLE_ELEMENTS = ['script'];

export const STYLIN_CONTROLLERS: ReadonlyArray<`in-${StylinControllersKey}`> = [
  'in-def-class',
  'in-use-class',
];

export { CSS_PROPERTIES } from './css-properties.js';
export { CSS_PSEUDO_SELECTORS } from './pseudo-selectors.js';
