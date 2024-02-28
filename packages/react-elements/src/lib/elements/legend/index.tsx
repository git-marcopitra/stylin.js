import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LegendElementProps, LegendProps } from './legend.types';

const LegendElement = stylin<
  LegendElementProps & RefAttributes<LegendElementProps>
>('legend')();

export const Legend = forwardRef<PropsWithChildren<LegendProps>>(
  (props, ref) => <LegendElement {...props} ref={ref} />
);

Legend.displayName = 'Legend';

export * from './legend.types';
