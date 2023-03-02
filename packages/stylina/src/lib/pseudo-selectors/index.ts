import { PropertiesHyphen } from 'csstype';

import { CSS_PROPERTIES, CSS_PSEUDO_SELECTORS } from '../../constants/index.js';
import getPseudoSelectors from './get-pseudo-selectors.js';

const getStylinPseudos = (element: Element) => {
  const stylinPseudos = getPseudoSelectors(element);

  const parsedStylinPseudoStyles = stylinPseudos.reduce(
    (acc, { name, value }) => {
      const styles = value.split(';');

      const formattedValues = styles.reduce(
        (accumulator: string, style: string) => {
          const [property] = style.trim().split(':');

          if (
            !Object.values(CSS_PROPERTIES).includes(
              property as keyof PropertiesHyphen
            )
          )
            return accumulator;

          return `${accumulator}\t${style.trim()};\n`;
        },
        ''
      );

      return [
        ...acc,
        { pseudo: CSS_PSEUDO_SELECTORS[name], parsedStyle: formattedValues },
      ];
    },
    [] as ReadonlyArray<{ pseudo: string; parsedStyle: string }>
  );

  return parsedStylinPseudoStyles;
};

export default getStylinPseudos;
