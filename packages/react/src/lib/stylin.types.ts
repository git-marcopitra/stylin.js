/* eslint-disable @typescript-eslint/ban-types */
import {
  ArrayInterpolation,
  Interpolation,
  StyledComponent,
} from '@emotion/styled';
import {
  CSSProperties,
  StylinCustomPropertiesType,
  Theme,
  TStylinFn,
} from '@stylin.js/core';

import { CSS_PSEUDO_SELECTORS } from '../constants';

type StylinPseudoKeys = keyof typeof CSS_PSEUDO_SELECTORS;

export type StylinComponentProps = Partial<
  CSSProperties &
    Record<StylinCustomPropertiesType, string> &
    Record<
      StylinPseudoKeys,
      Interpolation<
        CSSProperties & Partial<Record<StylinCustomPropertiesType, string>>
      >
    >
>;

type StylinComponentPropsWithOptionalTheme = StylinComponentProps & {
  theme?: Theme;
};

export type CreateStylinArguments = ReadonlyArray<
  | TStylinFn<StylinComponentPropsWithOptionalTheme>
  | Interpolation<StylinComponentPropsWithOptionalTheme>
  | ArrayInterpolation<StylinComponentPropsWithOptionalTheme>
>;

export type StylinComponent<StylinProps extends {}> = StyledComponent<
  StylinComponentProps,
  StylinProps
>;
