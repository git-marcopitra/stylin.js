import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { EmElementProps, EmProps } from './em.types';

const EmElement = stylin<EmElementProps & RefAttributes<EmElementProps>>(
  'em'
)();

export const Em = forwardRef<PropsWithChildren<EmProps>>((props, ref) => (
  <EmElement {...props} ref={ref} />
));

Em.displayName = 'Em';

export * from './em.types';
