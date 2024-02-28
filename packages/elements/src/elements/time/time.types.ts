import { StylinComponentProps } from '@stylin.js/react';
import { TimeHTMLAttributes } from 'react';

export type TimeElementProps = Omit<
  TimeHTMLAttributes<HTMLTimeElement>,
  'color' | 'translate'
>;

export interface TimeProps extends StylinComponentProps, TimeElementProps {}
