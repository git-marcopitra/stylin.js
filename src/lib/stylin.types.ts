import { StyledComponent } from '@emotion/styled';
import CSS from 'csstype';

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

export type TGetBreakpoint = (index: number, theme: Theme) => string;

export type TGetStyles = (styles: TStyles) => TStyleEntries;

export type TCreateStylinComponent<T extends StylinComponentProps> = (
  ...styles: ReadonlyArray<SerializedStyles | TStylinFn<T>>
) => StyledComponent<T>;

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

export type StylinSimplePseudos =
  | 'on-cue'
  | 'on-cueRegion'
  | 'on-khtmlAnyLink'
  | 'on-mozAnyLink'
  | 'on-mozFocusring'
  | 'on-mozFullScreen'
  | 'on-mozReadOnly'
  | 'on-mozReadWrite'
  | 'on-mozUiInvalid'
  | 'on-mozUiValid'
  | 'on-msFullscreen'
  | 'on-webkitAnyLink'
  | 'on-webkitFullScreen'
  | 'on-mozPlaceholder'
  | 'on-mozProgressBar'
  | 'on-mozRangeProgress'
  | 'on-mozRangeThumb'
  | 'on-mozRangeTrack'
  | 'on-mozSelection'
  | 'on-msBackdrop'
  | 'on-msBrowse'
  | 'on-msCheck'
  | 'on-msClear'
  | 'on-msFill'
  | 'on-msFillLower'
  | 'on-msFillUpper'
  | 'on-msInputPlaceholder'
  | 'on-msReveal'
  | 'on-msThumb'
  | 'on-msTicksAfter'
  | 'on-msTicksBefore'
  | 'on-msTooltip'
  | 'on-msTrack'
  | 'on-msValue'
  | 'on-webkitBackdrop'
  | 'on-webkitInputPlaceholder'
  | 'on-webkitProgressBar'
  | 'on-webkitProgressInnerValue'
  | 'on-webkitProgressValue'
  | 'on-webkitSliderRunnableTrack'
  | 'on-webkitSliderThumb'
  | 'on-after'
  | 'on-backdrop'
  | 'on-before'
  | 'on-firstLetter'
  | 'on-firstLine'
  | 'on-grammarError'
  | 'on-marker'
  | 'on-placeholder'
  | 'on-selection'
  | 'on-spellingError'
  | 'on-targetText'
  | 'on-active'
  | 'on-anyLink'
  | 'on-blank'
  | 'on-checked'
  | 'on-current'
  | 'on-default'
  | 'on-defined'
  | 'on-disabled'
  | 'on-empty'
  | 'on-enabled'
  | 'on-first'
  | 'on-firstChild'
  | 'on-firstOfType'
  | 'on-focus'
  | 'on-focusVisible'
  | 'on-focusWithin'
  | 'on-fullscreen'
  | 'on-future'
  | 'on-hover'
  | 'on-inRange'
  | 'on-indeterminate'
  | 'on-invalid'
  | 'on-lastChild'
  | 'on-lastOfType'
  | 'on-left'
  | 'on-link'
  | 'on-localLink'
  | 'on-nthCol'
  | 'on-nthLastCol'
  | 'on-onlyChild'
  | 'on-onlyOfType'
  | 'on-optional'
  | 'on-outOfRange'
  | 'on-past'
  | 'on-paused'
  | 'on-pictureInPicture'
  | 'on-placeholderShown'
  | 'on-readOnly'
  | 'on-readWrite'
  | 'on-required'
  | 'on-right'
  | 'on-root'
  | 'on-scope'
  | 'on-target'
  | 'on-targetWithin'
  | 'on-userInvalid'
  | 'on-userValid'
  | 'on-valid'
  | 'on-visited';

export type StylinComponentProps = CSSProperties &
  Partial<Record<StylinCustomPropertiesType, string>> &
  Partial<Record<StylinSimplePseudos, CSSInterpolation>>;
