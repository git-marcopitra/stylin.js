import styled from '@emotion/styled';

import { Theme } from '../interface';
import renderStyles from './render-styles';
import {
  GenericWithTheme,
  SerializedStyles,
  StylinComponentProps,
  TCreateStylinComponent,
  TStylinFn,
} from './stylin.types';
import { isFunction } from './utils';

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
