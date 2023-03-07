import {
  CSS_PROPERTIES,
  RESPONSIVENESS_SEPARATOR,
} from '../../constants/index.js';
import { RawStyle } from '../types';
import { getParsedStylinAttributesList } from '../utils.js';

const getStyleProperties = (element: Element): RawStyle =>
  getParsedStylinAttributesList(element, Object.keys(CSS_PROPERTIES)).map(
    (item) => ({ ...item, value: item.value.split(RESPONSIVENESS_SEPARATOR) })
  );

export default getStyleProperties;
