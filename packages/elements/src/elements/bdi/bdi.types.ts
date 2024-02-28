import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BdiElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface BdiProps extends StylinComponentProps, BdiElementProps {}
