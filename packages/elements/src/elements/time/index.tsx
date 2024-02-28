import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TimeElementProps, TimeProps } from './time.types';

export const stylinTime = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TimeElementProps & RefAttributes<TimeElementProps>>('time')(
    ...styles
  );

const TimeElement = stylinTime();

export const Time = forwardRef<TimeElementProps, PropsWithChildren<TimeProps>>((props, ref) => (
  <TimeElement {...props} ref={ref} />
));

Time.displayName = 'Time';

export * from './time.types';
