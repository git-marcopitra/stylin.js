import {
  CSSInterpolation,
  StylinSimplePseudos,
  Theme,
  TPseudoSelector,
  TStyles,
} from '../stylin.types';
import renderPseudoSelector from '.';

const renderPseudoSelectorTestTable: ReadonlyArray<
  [StylinSimplePseudos, TStyles, TPseudoSelector]
> = [
  [
    'on-hover',
    { bg: 'blue' },
    {
      ':hover': [{ background: 'blue' } as CSSInterpolation],
    },
  ],
  [
    'on-active',
    { mx: 'L' },
    {
      ':active': [
        { marginLeft: '1.5rem', marginRight: '1.5rem' } as CSSInterpolation,
      ],
    },
  ],
];

const theme = { space: { S: '0.5rem', M: '1rem', L: '1.5rem' } };

describe(renderPseudoSelector.name, () => {
  const makeSut = (theme: Theme) => ({
    sut: (selector: StylinSimplePseudos, styles: TStyles) =>
      renderPseudoSelector(theme, selector, styles),
  });

  it.each(renderPseudoSelectorTestTable)(
    'should receive %s with %o and returns %o',
    (selector, styles, expected) => {
      const { sut } = makeSut(theme);

      const result = sut(selector, styles);

      expect(result).toEqual(expected);
    }
  );
});
