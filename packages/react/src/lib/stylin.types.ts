import { StyledComponent } from '@emotion/styled';
import {
  CSSInterpolation,
  CSSProperties,
  SerializedStyles,
  StylinCustomPropertiesType,
  StylinSimplePseudos,
  TStylinFn,
} from '@stylin.js/core';
import type { AriaAttributes } from 'react';

export type StylinComponentProps = CSSProperties &
  Partial<Record<StylinCustomPropertiesType, string>> &
  Partial<Record<StylinSimplePseudos, CSSInterpolation>>;

export type StylinComponent<T extends AriaAttributes> = StyledComponent<
  T,
  StylinComponentProps
>;

export type TCreateStylinComponent<T extends AriaAttributes> = (
  ...styles: ReadonlyArray<SerializedStyles | TStylinFn<T>>
) => StylinComponent<T>;
