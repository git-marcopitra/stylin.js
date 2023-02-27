import { STYLIN_CONTROLLERS } from '../constants/index.js';
import {
  MakeStyleIdArguments,
  MakeStyleIdReturn,
  RawStyle,
  RemoveAttributesArgument,
  StylinControllersKey,
} from './types';

export const parseStyle = (styles: RawStyle): string =>
  styles.reduce((acc, { name, value }) => `${acc}\t${name}: ${value};\n`, '');

export const makeStyleId = ({
  defClassName,
  useClassNameList,
  reusableClass,
}: MakeStyleIdArguments): MakeStyleIdReturn => {
  const styleId = `stylin-${crypto.randomUUID().split('-')[0]}`;

  if (!defClassName && !useClassNameList.length && !reusableClass)
    return [[styleId], []];

  if (!defClassName && useClassNameList.length && !reusableClass)
    return [[...[useClassNameList.join('.')], styleId], []];

  if (!defClassName && !useClassNameList.length && reusableClass)
    return [[], reusableClass.split(' ')];

  if (!defClassName && useClassNameList.length && reusableClass)
    return [[useClassNameList.join('.')], reusableClass.split(' ')];

  if (defClassName && !useClassNameList.length && !reusableClass)
    return [[defClassName], []];

  const combinedList = [useClassNameList.join('.')].map(
    (useClassName) => `${defClassName}.${useClassName}`
  );

  return [combinedList, []];
};

export const removeAttributes = ({
  attributes,
  element,
}: RemoveAttributesArgument): void =>
  attributes.forEach((attribute) => element.removeAttribute(attribute));

export const getStylinStyles = (element: Element): RawStyle => {
  const attributes = new Array(...element.attributes);

  if (!attributes.length) return [];

  const stylinAttributes = attributes
    .filter(
      ({ name }) =>
        name.startsWith('in-') &&
        !STYLIN_CONTROLLERS.includes(
          name.replace('in-', '') as StylinControllersKey
        )
    )
    .map(({ name, value }) => ({
      value,
      name: name.replace('in-', ''),
    }));

  return stylinAttributes;
};
