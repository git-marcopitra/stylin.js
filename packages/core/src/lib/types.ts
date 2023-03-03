import CSS, { SimplePseudos } from 'csstype';

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
export type CSSPropertiesKeys = keyof CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in CSSPropertiesKeys]:
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

export interface IVariantProperty {
  scale: keyof VariantKeys;
  property: string;
}

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TVariantStyleFn = TStylinFn<Record<string, any>>;

export type TRenderVariant = (args: IVariantProperty) => TVariantStyleFn;

export type TStyleKeys = CSSPropertiesKeys & StylinCustomPropertiesType;

export type TStyles = Record<TStyleKeys, TStyleValue>;
export type TPseudos = Record<StylinSimplePseudos, TStyles>;

export type TStyleEntries = ReadonlyArray<[TStyleKeys, TStyleValue]>;
export type TPseudoEntries = ReadonlyArray<[StylinSimplePseudos, TStyles]>;

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
) => ArrayCSSInterpolation;

export type TPseudoSelector = Record<string, ArrayCSSInterpolation>;

export type TRenderPseudoSelector = (
  theme: Theme,
  selector: StylinSimplePseudos,
  styles: TStyles
) => TPseudoSelector;

export type TGetBreakpoint = (
  index: number,
  defaultBreakpoints: ReadonlyArray<string>,
  theme: Theme
) => string;

export type TGetStyles = (
  styles: TStyles,
  cssPropertiesList: ReadonlyArray<string>
) => TStyleEntries;

export type TRenderProperty = (
  theme: Theme,
  prop: TStyleKeys,
  value: TStyleValue
) => CSSInterpolation;

export type TRenderThemedStyle = (
  theme: Theme,
  property: CSSPropertiesKeys,
  style: TStyleValue
) => string | number;

export type StylinSimplePseudos = string;

export type PropertyMap = Record<
  StylinCustomPropertiesType,
  ReadonlyArray<CSSPropertiesKeys>
>;

export type PseudoSelectors = Record<string, SimplePseudos>;

export type CustomProperties = Record<
  StylinCustomPropertiesType,
  StylinCustomPropertiesType
>;

export type ThemeValuesMap = Partial<
  Record<
    CSSPropertiesKeys,
    'radii' | 'space' | 'colors' | 'fontSizes' | 'breakpoints'
  >
>;
