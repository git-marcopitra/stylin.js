import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes } from 'react';

export type ButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate'
>;

export interface ButtonProps extends StylinComponentProps, ButtonElementProps {}
