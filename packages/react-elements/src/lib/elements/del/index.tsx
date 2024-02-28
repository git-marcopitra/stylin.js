import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DelElementProps, DelProps } from './del.types';

export const Del = forwardRef<PropsWithChildren<DelProps>>((props, ref) => {
  const DelElement = stylin<DelElementProps & RefAttributes<DelElementProps>>(
    'del'
  )();

  return <DelElement {...props} ref={ref} />;
});

Del.displayName = 'Del';

export * from './del.types';
