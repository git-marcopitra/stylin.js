import {
  MakeStyleIdArguments,
  MakeStyleIdReturn,
  RawStyle,
  StylinAttributesList,
  StylinAttributesMap,
} from './types';

const stringArrayEquals = (
  first: ReadonlyArray<string>,
  second: ReadonlyArray<string>
) =>
  first.length == second.length &&
  first.every((value, index) => second[index] == value);

export const rawStyleArrayEquals = (first: RawStyle, second: RawStyle) =>
  first.length == second.length &&
  first.every(
    ({ value, name }, index) =>
      stringArrayEquals(second[index].value, value) &&
      second[index].name == name
  );

export const makeStyleId = ({
  defClassName,
  useClassNameList,
  reusableClass,
  hasStyle,
  hasPseudos,
}: MakeStyleIdArguments): MakeStyleIdReturn => {
  const styleId =
    hasStyle || hasPseudos ? `stylin-${crypto.randomUUID().split('-')[0]}` : '';

  if (!defClassName && !useClassNameList.length && !reusableClass)
    return [[styleId], [], []];

  if (!defClassName && useClassNameList.length && !reusableClass)
    return [[styleId], [useClassNameList.join('.')], []];

  if (!defClassName && !useClassNameList.length && reusableClass)
    return [[], [], reusableClass.split(' ')];

  if (!defClassName && useClassNameList.length && reusableClass)
    return [[], [useClassNameList.join('.')], reusableClass.split(' ')];

  if (defClassName && !useClassNameList.length && !reusableClass)
    return [[defClassName], [], []];

  const combinedList = [useClassNameList.join('.')].map(
    (useClassName) => `${defClassName}.${useClassName}`
  );

  return [combinedList, [], []];
};

export const invalidStylinAttributes = (element: Element) => {
  const attributes = Array.from(element.attributes);

  const stylinAttributes = attributes.filter(({ name }) =>
    name.startsWith('in-')
  );

  if (!stylinAttributes.length) return;

  stylinAttributes.forEach((attribute) =>
    console.warn(
      `Stylina: ${attribute.name} is not a valid attribute.`,
      attribute
    )
  );
};

export const getParsedStylinAttributesMap = <T>(
  element: Element,
  attributeList: ReadonlyArray<T>
): StylinAttributesMap => {
  const attributes = Array.from(element.attributes);

  if (!attributes.length) return {};

  const parsedStylinAttributes = attributes.reduce((acc, { name, value }) => {
    if (!attributeList.includes(name as T)) return acc;

    element.removeAttribute(name);

    return {
      ...acc,
      [name.replace('in-', '')]: value,
    };
  }, {});

  return parsedStylinAttributes;
};

export const getParsedStylinAttributesList = <T>(
  element: Element,
  attributeList: ReadonlyArray<T>,
  removeString = 'in-'
): StylinAttributesList => {
  const attributes = Array.from(element.attributes);

  if (!attributes.length) return [];

  const parsedStylinAttributes = attributes.reduce((acc, { name, value }) => {
    if (!attributeList.includes(name as T)) return acc;

    element.removeAttribute(name);

    return [
      ...acc,
      {
        value,
        name: name.replace(removeString, ''),
      },
    ];
  }, [] as StylinAttributesList);

  return parsedStylinAttributes;
};
