import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AElementProps, AProps } from './a.types';

export const A = forwardRef<PropsWithChildren<AProps>>((props, ref) => {
  const AElement = stylin<AElementProps & RefAttributes<AElementProps>>('a')();

  return <AElement {...props} ref={ref} />;
});

A.displayName = 'A';

export * from './a.types';
