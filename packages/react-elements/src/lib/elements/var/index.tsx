import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VarElementProps, VarProps } from './var.types';

export const stylinVar = stylin<
  VarElementProps & RefAttributes<VarElementProps>
>('var');

const VarElement = stylinVar();

export const Var = forwardRef<PropsWithChildren<VarProps>>((props, ref) => (
  <VarElement {...props} ref={ref} />
));

Var.displayName = 'Var';

export * from './var.types';
