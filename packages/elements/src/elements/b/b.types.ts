import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface BProps extends StylinComponentProps, BElementProps {}
