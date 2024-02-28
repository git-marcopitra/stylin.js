import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SummaryElementProps, SummaryProps } from './summary.types';

const SummaryElement = stylin<
  SummaryElementProps & RefAttributes<SummaryElementProps>
>('summary')();

export const Summary = forwardRef<PropsWithChildren<SummaryProps>>(
  (props, ref) => <SummaryElement {...props} ref={ref} />
);

Summary.displayName = 'Summary';

export * from './summary.types';
