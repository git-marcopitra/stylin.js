import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RpElementProps, RpProps } from './rp.types';

const RpElement = stylin<RpElementProps & RefAttributes<RpElementProps>>(
  'rp'
)();

export const Rp = forwardRef<PropsWithChildren<RpProps>>((props, ref) => (
  <RpElement {...props} ref={ref} />
));

Rp.displayName = 'Rp';

export * from './rp.types';
