import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VarElementProps, VarProps } from './var.types';

const VarElement = stylin<VarElementProps & RefAttributes<VarElementProps>>(
  'var'
)();

export const Var = forwardRef<PropsWithChildren<VarProps>>((props, ref) => (
  <VarElement {...props} ref={ref} />
));

Var.displayName = 'Var';

export * from './var.types';
