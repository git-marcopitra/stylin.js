import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MeterElementProps, MeterProps } from './meter.types';

const MeterElement = stylin<
  MeterElementProps & RefAttributes<MeterElementProps>
>('meter')();

export const Meter = forwardRef<PropsWithChildren<MeterProps>>((props, ref) => (
  <MeterElement {...props} ref={ref} />
));

Meter.displayName = 'Meter';

export * from './meter.types';
