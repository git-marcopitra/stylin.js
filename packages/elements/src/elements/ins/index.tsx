import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { InsElementProps, InsProps } from './ins.types';

export const stylinIns = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & InsElementProps & RefAttributes<InsElementProps>>('ins')(
    ...styles
  );

const InsElement = stylinIns();

export const Ins = forwardRef<InsElementProps, PropsWithChildren<InsProps>>((props, ref) => (
  <InsElement {...props} ref={ref} />
));

Ins.displayName = 'Ins';

export * from './ins.types';
