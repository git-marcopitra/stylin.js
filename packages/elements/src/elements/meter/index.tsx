import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MeterElementProps, MeterProps } from './meter.types';

export const stylinMeter = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & MeterElementProps & RefAttributes<MeterElementProps>>('meter')(
    ...styles
  );

const MeterElement = stylinMeter();

export const Meter = forwardRef<MeterElementProps, PropsWithChildren<MeterProps>>((props, ref) => (
  <MeterElement {...props} ref={ref} />
));

Meter.displayName = 'Meter';

export * from './meter.types';
