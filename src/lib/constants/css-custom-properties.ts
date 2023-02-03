import type { CSSProperties } from 'react';

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

export const StylinCustomProperties = {
  bg: 'bg',
  m: 'm',
  mx: 'mx',
  my: 'my',
  mt: 'mt',
  mr: 'mr',
  mb: 'mb',
  ml: 'ml',
  p: 'p',
  px: 'px',
  py: 'py',
  pt: 'pt',
  pr: 'pr',
  pb: 'pb',
  pl: 'pl',
};

export const CUSTOM_PROPERTY_MAP: Record<
  StylinCustomPropertiesType,
  ReadonlyArray<keyof CSSProperties>
> = {
  bg: ['background'],
  m: ['margin'],
  my: ['marginTop', 'marginBottom'],
  mx: ['marginLeft', 'marginRight'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  p: ['padding'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
};
