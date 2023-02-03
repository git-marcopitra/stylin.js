import { CSSInterpolation } from '@emotion/serialize';

import renderResponsiveStyle from './render-responsive-style';
import { TRenderPseudoSelector, TStyleKeys, TStyleValue } from './stylin.types';

const renderPseudoSelector: TRenderPseudoSelector = (
  theme,
  selector,
  styles
) => ({
  [`:${selector}`]: Object.entries(styles).reduce(
    (acc, [prop, value]) =>
      acc.concat(
        renderResponsiveStyle(theme, prop as TStyleKeys, value as TStyleValue)
      ),
    [] as Array<CSSInterpolation>
  ),
});

export default renderPseudoSelector;
