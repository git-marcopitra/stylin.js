import { keys } from 'ramda';

import { CUSTOM_PROPERTY_MAP } from './css-custom-properties';
import { CSS_PROPERTIES_ARRAY } from './css-properties';

export const CSS_STYLING_MAP = [
  ...CSS_PROPERTIES_ARRAY,
  ...keys(CUSTOM_PROPERTY_MAP),
];

export * from './css-custom-properties';
export * from './css-properties';
export * from './css-pseudo-selectors';
