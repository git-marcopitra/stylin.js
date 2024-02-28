import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DivElementProps, DivProps } from './div.types';

export const Div = forwardRef<PropsWithChildren<DivProps>>((props, ref) => {
  const DivElement = stylin<DivElementProps & RefAttributes<DivElementProps>>(
    'div'
  )();

  return <DivElement {...props} ref={ref} />;
});

Div.displayName = 'Div';

export * from './div.types';
