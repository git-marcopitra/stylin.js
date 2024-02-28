import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DfnElementProps, DfnProps } from './dfn.types';

export const Dfn = forwardRef<PropsWithChildren<DfnProps>>((props, ref) => {
  const DfnElement = stylin<DfnElementProps & RefAttributes<DfnElementProps>>(
    'dfn'
  )();

  return <DfnElement {...props} ref={ref} />;
});

Dfn.displayName = 'Dfn';

export * from './dfn.types';
