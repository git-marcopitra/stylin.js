import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LegendElementProps, LegendProps } from './legend.types';

export const stylinLegend = stylin<
  LegendElementProps & RefAttributes<LegendElementProps>
>('legend');

const LegendElement = stylinLegend();

export const Legend = forwardRef<PropsWithChildren<LegendProps>>(
  (props, ref) => <LegendElement {...props} ref={ref} />
);

Legend.displayName = 'Legend';

export * from './legend.types';
