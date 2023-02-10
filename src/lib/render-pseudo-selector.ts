import { CSSPseudoSelectors } from './constants';
import renderResponsiveStyle from './render-responsive-style';
import {
  CSSInterpolation,
  TRenderPseudoSelector,
  TStyleEntries,
} from './stylin.types';

const renderPseudoSelector: TRenderPseudoSelector = (
  theme,
  selector,
  styles
) => ({
  [CSSPseudoSelectors[selector]]: (
    Object.values(styles) as unknown as TStyleEntries
  ).reduce(
    (acc, [prop, value]) => [
      ...acc,
      ...renderResponsiveStyle(theme, prop, value),
    ],
    [] as Array<CSSInterpolation>
  ),
});

export default renderPseudoSelector;
