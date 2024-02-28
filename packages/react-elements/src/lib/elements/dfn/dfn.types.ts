import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DfnElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface DfnProps extends StylinComponentProps, DfnElementProps {}
