import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BrElementProps, BrProps } from './br.types';

export const stylinBr = stylin<BrElementProps & RefAttributes<BrElementProps>>(
  'br'
);

const BrElement = stylinBr();

export const Br = forwardRef<PropsWithChildren<BrProps>>((props, ref) => (
  <BrElement {...props} ref={ref} />
));

Br.displayName = 'Br';

export * from './br.types';
