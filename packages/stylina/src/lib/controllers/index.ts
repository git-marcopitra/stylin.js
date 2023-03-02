import { ControllerData } from '../types';
import getStylinControllers from './get-stylin-controllers.js';

const getControllerClassNames = (element: Element): ControllerData => {
  const controllers = getStylinControllers(element);

  const defClassName = controllers['def-class'] ?? '';
  const useClassNameList = [...new Set(controllers['use-class']?.split(','))];

  const controllerClassNames = { useClassNameList, defClassName };

  return controllerClassNames;
};

export default getControllerClassNames;
