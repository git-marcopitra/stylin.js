import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VarElementProps, VarProps } from './var.types';

export const stylinVar = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & VarElementProps & RefAttributes<VarElementProps>>('var')(
    ...styles
  );

const VarElement = stylinVar();

export const Var = forwardRef<VarElementProps, PropsWithChildren<VarProps>>((props, ref) => (
  <VarElement {...props} ref={ref} />
));

Var.displayName = 'Var';

export * from './var.types';
