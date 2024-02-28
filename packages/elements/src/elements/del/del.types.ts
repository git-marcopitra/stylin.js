import { StylinComponentProps } from '@stylin.js/react';
import { DelHTMLAttributes } from 'react';

export type DelElementProps = Omit<
  DelHTMLAttributes<HTMLModElement>,
  'color' | 'translate'
>;

export interface DelProps extends StylinComponentProps, DelElementProps {}
