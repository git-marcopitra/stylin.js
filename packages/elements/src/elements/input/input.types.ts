import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes } from 'react';

export type InputElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface InputProps extends StylinComponentProps, InputElementProps {}
