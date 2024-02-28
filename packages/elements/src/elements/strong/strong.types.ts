import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type StrongElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface StrongProps extends StylinComponentProps, StrongElementProps {}
