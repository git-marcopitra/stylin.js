import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { InsElementProps, InsProps } from './ins.types';

const InsElement = stylin<InsElementProps & RefAttributes<InsElementProps>>(
  'ins'
)();

export const Ins = forwardRef<PropsWithChildren<InsProps>>((props, ref) => (
  <InsElement {...props} ref={ref} />
));

Ins.displayName = 'Ins';

export * from './ins.types';
