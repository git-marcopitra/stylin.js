import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PElementProps, PProps } from './p.types';

const PElement = stylin<PElementProps & RefAttributes<PElementProps>>('p')();

export const P = forwardRef<PropsWithChildren<PProps>>((props, ref) => (
  <PElement {...props} ref={ref} />
));

P.displayName = 'P';

export * from './p.types';
