import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AbbrElementProps, AbbrProps } from './abbr.types';

const AbbrElement = stylin<AbbrElementProps & RefAttributes<AbbrElementProps>>(
  'abbr'
)();

export const Abbr = forwardRef<PropsWithChildren<AbbrProps>>((props, ref) => (
  <AbbrElement {...props} ref={ref} />
));

Abbr.displayName = 'Abbr';

export * from './abbr.types';
