import { CustomProperties, PropertyMap } from '../../src/lib/stylin.types';

export const STYLIN_PROPERTY_MAP: CustomProperties = {
  m: 'm',
  bg: 'bg',
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

export const CUSTOM_PROPERTY_MAP: PropertyMap = {
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
