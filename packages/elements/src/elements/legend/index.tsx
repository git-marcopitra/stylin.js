import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LegendElementProps, LegendProps } from './legend.types';

export const stylinLegend = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & LegendElementProps & RefAttributes<LegendElementProps>>('legend')(
    ...styles
  );

const LegendElement = stylinLegend();

export const Legend = forwardRef<LegendElementProps, PropsWithChildren<LegendProps>>(
  (props, ref) => <LegendElement {...props} ref={ref} />
);

Legend.displayName = 'Legend';

export * from './legend.types';
