import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type AreaElementProps = Omit<
  HTMLAttributes<HTMLAreaElement>,
  'color' | 'translate'
>;

export interface AreaProps extends StylinComponentProps, AreaElementProps {}
