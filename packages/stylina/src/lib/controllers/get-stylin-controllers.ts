import { STYLIN_CONTROLLERS } from '../../constants/index.js';
import { StylinControllers } from '../types';
import { getParsedStylinAttributesMap } from './../utils.js';

const getStylinControllers = (element: Element): StylinControllers =>
  getParsedStylinAttributesMap(element, STYLIN_CONTROLLERS);

export default getStylinControllers;
