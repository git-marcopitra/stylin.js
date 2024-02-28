import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DtElementProps, DtProps } from './dt.types';

export const stylinDt = stylin<DtElementProps & RefAttributes<DtElementProps>>(
  'dt'
);

const DtElement = stylinDt();

export const Dt = forwardRef<PropsWithChildren<DtProps>>((props, ref) => (
  <DtElement {...props} ref={ref} />
));

Dt.displayName = 'Dt';

export * from './dt.types';
