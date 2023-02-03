import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import renderPseudoSelector from './render-pseudo-selector';
import renderResponsiveStyle from './render-responsive-style';
import { TRenderStyles, TStyleKeys, TStyleValue } from './stylin.types';
import { getPseudos, getStyles } from './utils';

const renderStyles: TRenderStyles = (props, theme) =>
  css(
    ...getStyles(props).reduce(
      (acc, [prop, value]) =>
        acc.concat(
          renderResponsiveStyle(theme, prop as TStyleKeys, value as TStyleValue)
        ),
      [] as Array<CSSInterpolation>
    ),
    ...getPseudos(props).reduce(
      (acc, [selector, pseudoStyles]) =>
        acc.concat(renderPseudoSelector(theme, selector, pseudoStyles!)),
      [] as Array<Record<string, CSSInterpolation>>
    )
  );

export default renderStyles;
