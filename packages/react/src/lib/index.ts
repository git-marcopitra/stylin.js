import styled from '@emotion/styled';
import { isFunction } from '@stylin.js/core';

import renderStyles from './render-styles';
import {
  GenericWithTheme,
  SerializedStyles,
  StylinComponentProps,
  TCreateStylinComponent,
  Theme,
  TStylinFn,
} from './stylin.types';

const stylin =
  <T extends StylinComponentProps>(
    component: keyof JSX.IntrinsicElements
  ): TCreateStylinComponent<T> =>
  (...styles) =>
    styled(component)(
      (props) =>
        styles.map((style) => {
          if (isFunction(style))
            (style as TStylinFn<T>)(props as GenericWithTheme<T>);
          return style as SerializedStyles;
        }),
      ({ theme, ...props }) => renderStyles(props, theme as Theme)
    );

export default stylin;
