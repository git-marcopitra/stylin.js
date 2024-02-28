import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DlElementProps = Omit<
  HTMLAttributes<HTMLDListElement>,
  'color' | 'translate'
>;

export interface DlProps extends StylinComponentProps, DlElementProps {}
