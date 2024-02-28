import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DelElementProps = Omit<
  HTMLAttributes<HTMLModElement>,
  'color' | 'translate'
>;

export interface DelProps extends StylinComponentProps, DelElementProps {}
