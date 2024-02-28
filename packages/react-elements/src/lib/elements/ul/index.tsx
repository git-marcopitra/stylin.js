import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { UlElementProps, UlProps } from './ul.types';

const UlElement = stylin<UlElementProps & RefAttributes<UlElementProps>>(
  'ul'
)();

export const Ul = forwardRef<PropsWithChildren<UlProps>>((props, ref) => (
  <UlElement {...props} ref={ref} />
));

Ul.displayName = 'Ul';

export * from './ul.types';
