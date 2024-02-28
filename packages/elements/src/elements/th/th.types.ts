import { StylinComponentProps } from '@stylin.js/react';
import { ThHTMLAttributes } from 'react';

export type ThElementProps = Omit<
  ThHTMLAttributes<HTMLTableCellElement>,
  'color' | 'translate'
>;

export type ThProps = StylinComponentProps & ThElementProps;
