import { MaybeArray, Theme, TStyleKeys, TStyleValue } from '@stylin.js/core';

import renderResponsiveStyle from '.';

const renderResponsiveStyleTestTable: ReadonlyArray<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [string, MaybeArray<string | number>, Array<Record<string, any>>]
> = [
  ['padding', '2rem', [{ padding: '2rem' }]],
  [
    'padding',
    ['2rem', '1rem', '0.5rem'],
    [
      { padding: '2rem' },
      {
        '@media (min-width: 36em)': {
          padding: '1rem',
        },
      },
      {
        '@media (min-width: 48em)': {
          padding: '0.5rem',
        },
      },
    ],
  ],
  [
    'padding',
    ['2rem', '1rem', '0.5rem', '1rem', '2rem', '1.5rem'],
    [
      { padding: '2rem' },
      {
        '@media (min-width: 36em)': {
          padding: '1rem',
        },
      },
      {
        '@media (min-width: 48em)': {
          padding: '0.5rem',
        },
      },
      {
        '@media (min-width: 62em)': {
          padding: '1rem',
        },
      },
      {
        '@media (min-width: 75em)': {
          padding: '2rem',
        },
      },
    ],
  ],
];
const renderResponsiveStyleTestTableWithTheme: ReadonlyArray<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [string, MaybeArray<string | number>, Array<Record<string, any>>]
> = [
  ['padding', '2rem', [{ padding: '2rem' }]],
  [
    'padding',
    ['2rem', '1rem', '0.5rem'],
    [
      { padding: '2rem' },
      {
        '@media (min-width: 44em)': {
          padding: '1rem',
        },
      },
      {
        '@media (min-width: 55em)': {
          padding: '0.5rem',
        },
      },
    ],
  ],
  [
    'padding',
    ['2rem', '1rem', '0.5rem', '1rem', '2rem', '1.5rem'],
    [
      { padding: '2rem' },
      {
        '@media (min-width: 44em)': {
          padding: '1rem',
        },
      },
      {
        '@media (min-width: 55em)': {
          padding: '0.5rem',
        },
      },
      {
        '@media (min-width: 64em)': {
          padding: '1rem',
        },
      },
    ],
  ],
];

describe(renderResponsiveStyle.name, () => {
  const makeSut = (theme: Theme) => ({
    sut: (prop: TStyleKeys, value: TStyleValue) =>
      renderResponsiveStyle(theme, prop, value),
  });

  it.each(renderResponsiveStyleTestTable)(
    'should receive %s prop, value %s return %o, with default breakpoints',
    (prop, value, expected) => {
      const { sut } = makeSut({});

      const result = sut(prop as TStyleKeys, value);

      expect(result).toEqual(expected);
    }
  );

  it.each(renderResponsiveStyleTestTableWithTheme)(
    'should receive %s prop, value %s return %o, with theme breakpoints',
    (prop, value, expected) => {
      const { sut } = makeSut({
        breakpoints: ['44em', '55em', '64em'],
      });

      const result = sut(prop as TStyleKeys, value);

      expect(result).toEqual(expected);
    }
  );
});
