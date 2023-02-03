import { SerializedStyles } from "@emotion/serialize";
import styled from "@emotion/styled";

import renderStyles from "./render-styles";
import {
  GenericWithTheme,
  TCreateStylinComponent,
  TStylinFn,
} from "./stylin.types";
import { isFunction } from "./utils";
import { IEmptyObj, Theme } from "../interface";

const stylin =
  <T extends IEmptyObj>(
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

export { default as variant } from "./render-variant";
