import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DfnElementProps, DfnProps } from './dfn.types';

export const stylinDfn = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DfnElementProps & RefAttributes<DfnElementProps>>('dfn')(
    ...styles
  );

const DfnElement = stylinDfn();

export const Dfn = forwardRef<PropsWithChildren<DfnProps>>((props, ref) => (
  <DfnElement {...props} ref={ref} />
));

Dfn.displayName = 'Dfn';

export * from './dfn.types';
