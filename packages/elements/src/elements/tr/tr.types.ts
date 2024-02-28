import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type TrElementProps = Omit<
  HTMLAttributes<HTMLTableRowElement>,
  'color' | 'translate'
>;

export interface TrProps extends StylinComponentProps, TrElementProps {}
