import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DdElementProps, DdProps } from './dd.types';

export const Dd = forwardRef<PropsWithChildren<DdProps>>((props, ref) => {
  const DdElement = stylin<DdElementProps & RefAttributes<DdElementProps>>(
    'dd'
  )();

  return <DdElement {...props} ref={ref} />;
});

Dd.displayName = 'Dd';

export * from './dd.types';
