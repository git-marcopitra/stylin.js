import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type SupElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface SupProps extends StylinComponentProps, SupElementProps {}
