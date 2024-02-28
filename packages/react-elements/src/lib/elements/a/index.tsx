import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AElementProps, AProps } from './a.types';

export const stylinA = stylin<AElementProps & RefAttributes<AElementProps>>(
  'a'
);

const AElement = stylinA();

export const A = forwardRef<PropsWithChildren<AProps>>((props, ref) => (
  <AElement {...props} ref={ref} />
));

A.displayName = 'A';

export * from './a.types';
