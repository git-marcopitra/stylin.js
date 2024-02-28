import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type SummaryElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface SummaryProps
  extends StylinComponentProps,
    SummaryElementProps {}
