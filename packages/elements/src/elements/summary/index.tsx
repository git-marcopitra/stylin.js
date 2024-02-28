import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SummaryElementProps, SummaryProps } from './summary.types';

export const stylinSummary = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SummaryElementProps & RefAttributes<SummaryElementProps>>(
    'summary'
  )(...styles);

const SummaryElement = stylinSummary();

export const Summary = forwardRef<SummaryElementProps, PropsWithChildren<SummaryProps>>(
  (props, ref) => <SummaryElement {...props} ref={ref} />
);

Summary.displayName = 'Summary';

export * from './summary.types';
