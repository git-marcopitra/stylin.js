import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BElementProps, BProps } from './b.types';

export const B = forwardRef<PropsWithChildren<BProps>>((props, ref) => {
  const BElement = stylin<BElementProps & RefAttributes<BElementProps>>('b')();

  return <BElement {...props} ref={ref} />;
});

B.displayName = 'B';

export * from './b.types';
