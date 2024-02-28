import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DelElementProps, DelProps } from './del.types';

export const stylinDel = stylin<
  DelElementProps & RefAttributes<DelElementProps>
>('del');

const DelElement = stylinDel();

export const Del = forwardRef<PropsWithChildren<DelProps>>((props, ref) => (
  <DelElement {...props} ref={ref} />
));

Del.displayName = 'Del';

export * from './del.types';
