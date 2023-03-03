import styled from '@emotion/styled';
import {
  GenericWithTheme,
  SerializedStyles,
  Theme,
  TStylinFn,
  utils,
} from '@stylin.js/core';
import { AriaAttributes } from 'react';

import renderStyles from './render-styles';
import { StylinComponent, TCreateStylinComponent } from './stylin.types';

const stylin =
  <T extends AriaAttributes>(
    component: keyof JSX.IntrinsicElements
  ): TCreateStylinComponent<T> =>
  (...styles) =>
    styled(component)<T>(
      (props) =>
        styles.map((style) => {
          if (utils.isFunction(style))
            (style as TStylinFn<T>)(props as GenericWithTheme<T>);
          return style as SerializedStyles;
        }),
      ({ theme, ...props }) => renderStyles(props, theme as Theme)
    ) as StylinComponent<T>;

export default stylin;
