import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DtElementProps, DtProps } from './dt.types';

const DtElement = stylin<DtElementProps & RefAttributes<DtElementProps>>(
  'dt'
)();

export const Dt = forwardRef<PropsWithChildren<DtProps>>((props, ref) => (
  <DtElement {...props} ref={ref} />
));

Dt.displayName = 'Dt';

export * from './dt.types';
