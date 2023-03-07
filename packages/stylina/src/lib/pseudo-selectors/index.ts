import { PropertiesHyphen } from 'csstype';

import {
  CSS_PROPERTIES,
  CSS_PSEUDO_SELECTORS,
  RESPONSIVENESS_SEPARATOR,
} from '../../constants/index.js';
import { PseudoSelectors, RawStyle } from './../types';
import getPseudoSelectors from './get-pseudo-selectors.js';

const getStylinPseudos = (element: Element) => {
  const stylinPseudos = getPseudoSelectors(element);

  const parsedStylinPseudoStyles = stylinPseudos.reduce(
    (acc, { name, value }) => {
      const styles = value.split(';') as ReadonlyArray<string>;

      const formattedValues = styles.reduce((accumulator, style) => {
        const [property, value] = style.trim().split(':');

        if (
          !Object.values(CSS_PROPERTIES).includes(
            property as keyof PropertiesHyphen
          )
        )
          return accumulator;

        return [
          ...accumulator,
          {
            name: property.trim(),
            value: value.trim().split(RESPONSIVENESS_SEPARATOR),
          },
        ];
      }, [] as RawStyle);

      return [
        ...acc,
        { pseudo: CSS_PSEUDO_SELECTORS[name], parsedStyles: formattedValues },
      ];
    },
    [] as PseudoSelectors
  );

  return parsedStylinPseudoStyles;
};

export default getStylinPseudos;
