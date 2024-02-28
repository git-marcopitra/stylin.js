import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DtElementProps, DtProps } from './dt.types';

export const Dt = forwardRef<PropsWithChildren<DtProps>>((props, ref) => {
  const DtElement = stylin<DtElementProps & RefAttributes<DtElementProps>>(
    'dt'
  )();

  return <DtElement {...props} ref={ref} />;
});

Dt.displayName = 'Dt';

export * from './dt.types';
