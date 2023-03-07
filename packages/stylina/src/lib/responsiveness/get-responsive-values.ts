import { RawStyle } from '../types';

const getResponsiveValues = (
  styles: RawStyle
): ReadonlyArray<ReadonlyArray<string>> => {
  const responsiveStyles = styles.reduce(
    (acc, { name, value }) => [
      ...acc,
      value.map((style) => `\t${name}: ${style.trim()};\n`),
    ],
    [] as ReadonlyArray<ReadonlyArray<string>>
  );

  const transposedResponsiveStyles = responsiveStyles
    .map((_, colIndex) =>
      responsiveStyles
        .map((row) => row[colIndex])
        .filter((val) => val !== undefined && val !== null)
    )
    .filter((arr) => arr.length);

  return transposedResponsiveStyles;
};

export default getResponsiveValues;
