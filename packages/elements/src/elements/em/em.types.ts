import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type EmElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface EmProps extends StylinComponentProps, EmElementProps {}
