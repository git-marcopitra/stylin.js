import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DlElementProps, DlProps } from './dl.types';

export const Dl = forwardRef<PropsWithChildren<DlProps>>((props, ref) => {
  const DlElement = stylin<DlElementProps & RefAttributes<DlElementProps>>(
    'dl'
  )();

  return <DlElement {...props} ref={ref} />;
});

Dl.displayName = 'Dl';

export * from './dl.types';
