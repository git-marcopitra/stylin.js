import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type LegendElementProps = Omit<
  HTMLAttributes<HTMLLegendElement>,
  'color' | 'translate'
>;

export interface LegendProps extends StylinComponentProps, LegendElementProps {}
