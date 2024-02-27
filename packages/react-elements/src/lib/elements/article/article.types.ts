import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type AreaElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface AreaProps extends StylinComponentProps, AreaElementProps {}
