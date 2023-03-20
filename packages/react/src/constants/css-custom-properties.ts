import { StylinCustomPropertiesType } from '@stylin.js/core';

import { StylinPropertyMap } from '../lib/stylin.types';

export const STYLIN_CUSTOM_PROPERTIES: Record<
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

export const CUSTOM_PROPERTY_MAP: StylinPropertyMap = {
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
