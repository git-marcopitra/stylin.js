import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdiElementProps, BdiProps } from './bdi.types';

export const Bdi = forwardRef<PropsWithChildren<BdiProps>>((props, ref) => {
  const BdiElement = stylin<BdiElementProps & RefAttributes<BdiElementProps>>(
    'bdi'
  )();

  return <BdiElement {...props} ref={ref} />;
});

Bdi.displayName = 'Bdi';

export * from './bdi.types';
