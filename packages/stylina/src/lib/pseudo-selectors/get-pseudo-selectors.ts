import { CSS_PSEUDO_SELECTORS } from '../../constants/index.js';
import { getParsedStylinAttributesList } from './../utils.js';

const getPseudoSelectors = (element: Element) =>
  getParsedStylinAttributesList(element, Object.keys(CSS_PSEUDO_SELECTORS), '');

export default getPseudoSelectors;
