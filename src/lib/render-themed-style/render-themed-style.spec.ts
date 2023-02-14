import { CSSPropertiesKeys, Theme } from '../stylin.types';
import renderThemedStyle from '.';

const renderThemedStyleTestTable: ReadonlyArray<
  [CSSPropertiesKeys, string, string]
> = [
  ['padding', 'M', '1rem'],
  ['borderRadius', 'L', '2rem'],
  ['margin', 'S', '0.5rem'],
  ['marginRight', 'L', '2rem'],
  ['marginRight', 'L', '2rem'],
  ['fontSize', 'L', 'L'],
  ['paddingBottom', 'XS', 'XS'],
  ['padding', 'XS', 'XS'],
];

const theme = {
  space: {
    S: '0.5rem',
    M: '1rem',
    L: '2rem',
  },
  radii: {
    S: '0.5rem',
    M: '1rem',
    L: '2rem',
  },
};

describe(renderThemedStyle.name, () => {
  const makeSut = (theme: Theme) => ({
    sut: (prop: CSSPropertiesKeys, style: string | number) =>
      renderThemedStyle(theme, prop, style),
  });

  it.each(renderThemedStyleTestTable)(
    'should receive property %s and value %s and return %s',
    (property, style, expected) => {
      const { sut } = makeSut(theme);

      const result = sut(property, style);

      expect(result).toBe(expected);
    }
  );
});
