import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TrElementProps, TrProps } from './tr.types';

export const stylinTr = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TrElementProps & RefAttributes<TrElementProps>>('tr')(...styles);

const TrElement = stylinTr();

export const Tr = forwardRef<TrElementProps, PropsWithChildren<TrProps>>((props, ref) => (
  <TrElement {...props} ref={ref} />
));

Tr.displayName = 'Tr';

export * from './tr.types';
