import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BrElementProps, BrProps } from './br.types';

export const stylinBr = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & BrElementProps & RefAttributes<BrElementProps>>('br')(...styles);

const BrElement = stylinBr();

export const Br = forwardRef<BrElementProps, PropsWithChildren<BrProps>>((props, ref) => (
  <BrElement {...props} ref={ref} />
));

Br.displayName = 'Br';

export * from './br.types';
