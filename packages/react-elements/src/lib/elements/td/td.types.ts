import { StylinComponentProps } from '@stylin.js/react';
import { TdHTMLAttributes } from 'react';

export type TdElementProps = Omit<
  TdHTMLAttributes<HTMLTableCellElement>,
  'color' | 'translate' | 'width' | 'height'
>;

export interface TdProps extends StylinComponentProps, TdElementProps {}
