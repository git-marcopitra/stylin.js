import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DfnElementProps, DfnProps } from './dfn.types';

export const stylinDfn = stylin<
  DfnElementProps & RefAttributes<DfnElementProps>
>('dfn');

const DfnElement = stylinDfn();

export const Dfn = forwardRef<PropsWithChildren<DfnProps>>((props, ref) => (
  <DfnElement {...props} ref={ref} />
));

Dfn.displayName = 'Dfn';

export * from './dfn.types';
