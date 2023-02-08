import { StyledComponent } from '@emotion/styled';
import CSS from 'csstype';

import { IEmptyObj } from '../interface';
import { CSSPseudoSelectors } from './constants';

export type ArrayCSSInterpolation = Array<CSSInterpolation>;

export interface ComponentSelector {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __emotion_styles: any;
}

export type Keyframes = {
  name: string;
  styles: string;
  anim: number;
  toString: () => string;
} & string;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };
export type CSSProperties = CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | Array<Extract<CSSProperties[K], string>>;
};
export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudos,
    CSSOthersObject {}

export interface CSSOthersObject {
  [propertiesName: string]: CSSInterpolation;
}

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | SerializedStyles
  | CSSObject;

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export type MaybeArray<T> = ReadonlyArray<T> | T;

export type StylinCustomPropertiesType =
  | 'bg'
  | 'm'
  | 'mx'
  | 'my'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = Record<string, any>;

export type TStyleValue = MaybeArray<string | number>;

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

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

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
