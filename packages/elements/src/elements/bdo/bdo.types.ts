import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BdoElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface BdoProps extends StylinComponentProps, BdoElementProps {}
