import { CSSPropertiesKeys, StylinCustomPropertiesType } from '../stylin.types';

export const StylinCustomProperties: Record<
  StylinCustomPropertiesType,
  StylinCustomPropertiesType
> = {
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
  ReadonlyArray<CSSPropertiesKeys>
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
