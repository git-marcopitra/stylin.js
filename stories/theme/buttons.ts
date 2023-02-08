import { colors } from './colors';
import { radii } from './radii';

const baseButton = {
  outline: 'none',
  borderRadius: radii.S,
  transition: 'all 200ms ease-in-out',
  '&:disabled': {
    border: 'none',
    color: colors.textSecondary,
    background: colors.disabled,
    '&:hover, &:focus': {
      border: 'none',
      cursor: 'not-allowed',
      background: colors.disabled,
    },
  },
};

export const buttons = {
  default: {
    ...baseButton,
    border: 'none',
    color: colors.text,
    background: colors.disabled,
    '&:hover, &:focus': {
      cursor: 'pointer',
      background: colors.highlight,
    },
  },
  outline: {
    ...baseButton,
    border: '1px solid',
    color: colors.primary,
    background: 'transparent',
    borderColor: colors.primary,
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: colors.primary,
      background: colors.primaryOpaque,
    },
  },
  text: {
    ...baseButton,
    border: 'none',
    color: colors.primary,
    background: 'transparent',
    borderColor: colors.primary,
    '&:hover, &:focus': {
      cursor: 'pointer',
      color: colors.primary,
      background: colors.primaryOpaque,
    },
    '&:disabled': {
      color: colors.textSecondary,
      '&:hover, &:focus': {
        cursor: 'not-allowed',
        background: 'transparent',
        color: colors.textSecondary,
      },
    },
  },
  custom: baseButton,
};
