import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AElementProps, AProps } from './a.types';

const AElement = stylin<AElementProps & RefAttributes<AElementProps>>('a')();

export const A = forwardRef<PropsWithChildren<AProps>>((props, ref) => (
  <AElement {...props} ref={ref} />
));

A.displayName = 'A';

export * from './a.types';
