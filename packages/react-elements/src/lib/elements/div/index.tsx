import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DivElementProps, DivProps } from './div.types';

export const stylinDiv = stylin<
  DivElementProps & RefAttributes<DivElementProps>
>('div');

const DivElement = stylinDiv();

export const Div = forwardRef<PropsWithChildren<DivProps>>((props, ref) => (
  <DivElement {...props} ref={ref} />
));

Div.displayName = 'Div';

export * from './div.types';
