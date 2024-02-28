import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SupElementProps, SupProps } from './sup.types';

const SupElement = stylin<SupElementProps & RefAttributes<SupElementProps>>(
  'sup'
)();

export const Sup = forwardRef<PropsWithChildren<SupProps>>((props, ref) => (
  <SupElement {...props} ref={ref} />
));

Sup.displayName = 'Sup';

export * from './sup.types';
