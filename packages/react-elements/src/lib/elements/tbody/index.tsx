import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TbodyElementProps, TbodyProps } from './tbody.types';

export const stylinTbody = stylin<
  TbodyElementProps & RefAttributes<TbodyElementProps>
>('tbody');

const TbodyElement = stylinTbody();

export const Tbody = forwardRef<PropsWithChildren<TbodyProps>>((props, ref) => (
  <TbodyElement {...props} ref={ref} />
));

Tbody.displayName = 'Tbody';

export * from './tbody.types';
