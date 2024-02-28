import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BElementProps, BProps } from './b.types';

export const stylinB = stylin<BElementProps & RefAttributes<BElementProps>>(
  'b'
);

const BElement = stylinB();

export const B = forwardRef<PropsWithChildren<BProps>>((props, ref) => (
  <BElement {...props} ref={ref} />
));

B.displayName = 'B';

export * from './b.types';
