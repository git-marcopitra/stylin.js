import { STYLIN_CONTROLLERS } from '@/constants';

import {
  ControllerData,
  StylinControllers,
  StylinControllersKey,
} from './types';

const getStylinControllers = (element: Element): StylinControllers => {
  const attributes = new Array(...element.attributes);

  if (!attributes.length) return {};

  const stylinControllers = attributes
    .filter(({ name }) =>
      STYLIN_CONTROLLERS.includes(
        name.replace('in-', '') as StylinControllersKey
      )
    )
    .reduce(
      (acc, { name, value }) => ({
        ...acc,
        [name.replace('in-', '')]: value,
      }),
      {}
    );

  return stylinControllers;
};

const getControllerClassNames = (element: Element): ControllerData => {
  const controllers = getStylinControllers(element);

  const defClassName = controllers['def-class'] ?? '';
  const useClassNameList = [...new Set(controllers['use-class']?.split(','))];

  STYLIN_CONTROLLERS.forEach((controller) =>
    element.removeAttribute(`in-${controller}`)
  );

  return { useClassNameList, defClassName };
};

export default getControllerClassNames;
