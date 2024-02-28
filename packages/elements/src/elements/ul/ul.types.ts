import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type UlElementProps = Omit<
  HTMLAttributes<HTMLUListElement>,
  'color' | 'translate'
>;

export interface UlProps extends StylinComponentProps, UlElementProps {}
