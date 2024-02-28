import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PElementProps, PProps } from './p.types';

export const stylinP = stylin<PElementProps & RefAttributes<PElementProps>>(
  'p'
);

const PElement = stylinP();

export const P = forwardRef<PropsWithChildren<PProps>>((props, ref) => (
  <PElement {...props} ref={ref} />
));

P.displayName = 'P';

export * from './p.types';
