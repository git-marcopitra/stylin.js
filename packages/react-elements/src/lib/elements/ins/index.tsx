import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { InsElementProps, InsProps } from './ins.types';

export const stylinIns = stylin<
  InsElementProps & RefAttributes<InsElementProps>
>('ins');

const InsElement = stylinIns();

export const Ins = forwardRef<PropsWithChildren<InsProps>>((props, ref) => (
  <InsElement {...props} ref={ref} />
));

Ins.displayName = 'Ins';

export * from './ins.types';
