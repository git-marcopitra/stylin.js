import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TimeElementProps, TimeProps } from './time.types';

export const stylinTime = stylin<
  TimeElementProps & RefAttributes<TimeElementProps>
>('time');

const TimeElement = stylinTime();

export const Time = forwardRef<PropsWithChildren<TimeProps>>((props, ref) => (
  <TimeElement {...props} ref={ref} />
));

Time.displayName = 'Time';

export * from './time.types';
