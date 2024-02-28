import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DfnElementProps, DfnProps } from './dfn.types';

const DfnElement = stylin<DfnElementProps & RefAttributes<DfnElementProps>>(
  'dfn'
)();

export const Dfn = forwardRef<PropsWithChildren<DfnProps>>((props, ref) => (
  <DfnElement {...props} ref={ref} />
));

Dfn.displayName = 'Dfn';

export * from './dfn.types';
