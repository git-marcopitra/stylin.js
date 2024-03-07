/* eslint-disable @typescript-eslint/ban-types */
import {
  ArrayInterpolation,
  Interpolation,
  StyledComponent,
} from '@emotion/styled';
import {
  CSSProperties,
  CSSPropertiesKeys,
  MaybeArray,
  StylinCustomPropertiesType,
  Theme,
  TStylinFn,
} from '@stylin.js/core';

import { CSS_PSEUDO_SELECTORS } from '../constants';

type StylinPseudoKeys = keyof typeof CSS_PSEUDO_SELECTORS;

export type StylinPropertyMap = Record<
  StylinCustomPropertiesType,
  ReadonlyArray<CSSPropertiesKeys>
>;

export type CSSMaybeArrayProperties = {
  [key in keyof CSSProperties]: MaybeArray<CSSProperties[key]>;
};

export interface StylinProperties extends CSSMaybeArrayProperties {
  bg: MaybeArray<CSSProperties['background']>;
  m: MaybeArray<CSSProperties['margin']>;
  my: MaybeArray<CSSProperties['margin']>;
  mx: MaybeArray<CSSProperties['margin']>;
  mt: MaybeArray<CSSProperties['margin']>;
  mr: MaybeArray<CSSProperties['margin']>;
  mb: MaybeArray<CSSProperties['margin']>;
  ml: MaybeArray<CSSProperties['margin']>;
  p: MaybeArray<CSSProperties['padding']>;
  px: MaybeArray<CSSProperties['padding']>;
  py: MaybeArray<CSSProperties['padding']>;
  pt: MaybeArray<CSSProperties['padding']>;
  pr: MaybeArray<CSSProperties['padding']>;
  pb: MaybeArray<CSSProperties['padding']>;
  pl: MaybeArray<CSSProperties['padding']>;
}

export type StylinComponentProps = Partial<
  StylinProperties &
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
