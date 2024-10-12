import makeRenderProperty from '../src/lib/make-render-property';
import makeRenderPseudoSelector from '../src/lib/make-render-pseudo-selector';
import makeRenderResponsiveStyle from '../src/lib/make-render-responsive-style';
import makeRenderThemedStyle from '../src/lib/make-render-themed-style';
import { Theme } from '../src/lib/types';
import {
  CSS_PSEUDO_SELECTORS,
  CUSTOM_PROPERTY_MAP,
  DEFAULT_BREAKPOINTS,
  STYLIN_PROPERTY_MAP,
} from './constants';
import { THEMED_VALUES_MAP } from './constants/themed-values';

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

export const renderThemedStyleTestFn = makeRenderThemedStyle(THEMED_VALUES_MAP);

export const renderPropertyTestFn = makeRenderProperty(
  CUSTOM_PROPERTY_MAP,
  STYLIN_PROPERTY_MAP,
  renderThemedStyleTestFn
);

export const renderResponsiveStyleTestFn = makeRenderResponsiveStyle(
  DEFAULT_BREAKPOINTS,
  renderPropertyTestFn
);

export const renderPseudoSelector = makeRenderPseudoSelector(
  CSS_PSEUDO_SELECTORS,
  renderResponsiveStyleTestFn
);

export * from './constants';
