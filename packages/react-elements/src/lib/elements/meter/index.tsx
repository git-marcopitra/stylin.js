import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MeterElementProps, MeterProps } from './meter.types';

export const stylinMeter = stylin<
  MeterElementProps & RefAttributes<MeterElementProps>
>('meter');

const MeterElement = stylinMeter();

export const Meter = forwardRef<PropsWithChildren<MeterProps>>((props, ref) => (
  <MeterElement {...props} ref={ref} />
));

Meter.displayName = 'Meter';

export * from './meter.types';
