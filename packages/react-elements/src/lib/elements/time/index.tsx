import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TimeElementProps, TimeProps } from './time.types';

const TimeElement = stylin<TimeElementProps & RefAttributes<TimeElementProps>>(
  'time'
)();

export const Time = forwardRef<PropsWithChildren<TimeProps>>((props, ref) => (
  <TimeElement {...props} ref={ref} />
));

Time.displayName = 'Time';

export * from './time.types';
