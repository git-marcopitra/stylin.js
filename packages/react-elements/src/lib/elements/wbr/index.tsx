import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { WbrElementProps, WbrProps } from './wbr.types';

const WbrElement = stylin<WbrElementProps & RefAttributes<WbrElementProps>>(
  'wbr'
)();

export const Wbr = forwardRef<PropsWithChildren<WbrProps>>((props, ref) => (
  <WbrElement {...props} ref={ref} />
));

Wbr.displayName = 'Wbr';

export * from './wbr.types';
