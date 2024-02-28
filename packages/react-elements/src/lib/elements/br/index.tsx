import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BrElementProps, BrProps } from './br.types';

export const Br = forwardRef<PropsWithChildren<BrProps>>((props, ref) => {
  const BrElement = stylin<BrElementProps & RefAttributes<BrElementProps>>(
    'br'
  )();

  return <BrElement {...props} ref={ref} />;
});

Br.displayName = 'Br';

export * from './br.types';
