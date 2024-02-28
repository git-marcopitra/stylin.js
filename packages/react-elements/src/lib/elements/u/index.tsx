import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { UElementProps, UProps } from './u.types';

export const stylinU = stylin<UElementProps & RefAttributes<UElementProps>>(
  'u'
);

const UElement = stylinU();

export const U = forwardRef<PropsWithChildren<UProps>>((props, ref) => (
  <UElement {...props} ref={ref} />
));

U.displayName = 'U';

export * from './u.types';
