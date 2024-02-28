import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SupElementProps, SupProps } from './sup.types';

export const stylinSup = stylin<
  SupElementProps & RefAttributes<SupElementProps>
>('sup');

const SupElement = stylinSup();

export const Sup = forwardRef<PropsWithChildren<SupProps>>((props, ref) => (
  <SupElement {...props} ref={ref} />
));

Sup.displayName = 'Sup';

export * from './sup.types';
