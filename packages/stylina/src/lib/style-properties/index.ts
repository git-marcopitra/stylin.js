import { CSS_PROPERTIES } from '../../constants/index.js';
import { RawStyle } from '../types';
import { getParsedStylinAttributesList } from '../utils.js';

const getStyleProperties = (element: Element): RawStyle =>
  getParsedStylinAttributesList(element, Object.keys(CSS_PROPERTIES));

export default getStyleProperties;
