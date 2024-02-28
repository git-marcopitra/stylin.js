import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdoElementProps, BdoProps } from './bdo.types';

export const Bdo = forwardRef<PropsWithChildren<BdoProps>>((props, ref) => {
  const BdoElement = stylin<BdoElementProps & RefAttributes<BdoElementProps>>(
    'bdo'
  )();

  return <BdoElement {...props} ref={ref} />;
});

Bdo.displayName = 'Bdo';

export * from './bdo.types';
