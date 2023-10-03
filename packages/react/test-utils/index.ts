import { Theme } from '@stylin.js/core';

export const getBreakpointsTestTable = (breakpoints: ReadonlyArray<string>) => [
  [0, 'undefined'],
  ...breakpoints.map((value, index) => [
    index + 1, // start counting from second position, where we start using breakpoints
    value,
  ]),
];

export const getRenderVariantTestTable = (
  theme: Theme,
  scale: string,
  property: string,
  propsValue: ReadonlyArray<string>
) =>
  propsValue.map((prop) => [
    prop,
    property,
    scale,
    theme[scale]?.[prop] ?? {}, // accessing the theme and get the prop on that scale
  ]);
