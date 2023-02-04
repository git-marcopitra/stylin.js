import { SerializedStyles } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { StyledComponent } from '@emotion/styled';
import { CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';

import { IEmptyObj } from '../interface';
import { CSSPseudoSelectors, StylinCustomPropertiesType } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = Record<string, any>;

export type TStyleValue = ResponsiveValue<string | number>;

type VariantKeys = Omit<
  Theme,
  'radii' | 'space' | 'colors' | 'fontSizes' | 'breakpoints'
>;

interface IVariantProperty {
  scale: keyof VariantKeys;
  property: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TStylinElementProps = GenericWithTheme<Record<string, any>>;

export type TRenderVariant = (
  args: IVariantProperty
) => (props: TStylinElementProps) => SerializedStyles;

export type TStyleKeys = keyof CSSProperties & StylinCustomPropertiesType;

export type TPseudoKeys = keyof typeof CSSPseudoSelectors;

export type TStyles = Record<TStyleKeys, TStyleValue>;
export type TPseudos = Record<TPseudoKeys, TStyleValue>;

export type RenderStylesProps = TStyles | TPseudos;

export type GenericWithTheme<T> = T & { theme: Theme };

export type TStylinFn<T> = (props: GenericWithTheme<T>) => SerializedStyles;

export type TRenderStyles = (
  props: RenderStylesProps,
  theme: Theme
) => SerializedStyles;

export type TRenderResponsiveStyles = (
  theme: Theme,
  prop: TStyleKeys,
  value: TStyleValue
) => Array<CSSInterpolation>;

export type TRenderPseudoSelector = (
  theme: Theme,
  selector: string,
  styles: TStyles
) => {
  [selector: string]: CSSInterpolation;
};

export type TGetBreakpoint = (index: number, theme: Theme) => string;

export type TCreateStylinComponent<T extends IEmptyObj> = (
  ...styles: ReadonlyArray<SerializedStyles | TStylinFn<T>>
) => StyledComponent<T>;

export type TRenderProperty = (
  theme: Theme,
  prop: TStyleKeys,
  value: string | number
) => CSSInterpolation;

export type TRenderThemedStyle = (
  theme: Theme,
  property: keyof CSSProperties,
  style: string | number
) => string | number;
