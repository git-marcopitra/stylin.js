import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type ButtonElementProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'color' | 'translate'
>;

export interface ButtonProps extends StylinComponentProps, ButtonElementProps {}
