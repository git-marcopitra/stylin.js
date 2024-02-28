import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SmallElementProps, SmallProps } from './small.types';

const SmallElement = stylin<
  SmallElementProps & RefAttributes<SmallElementProps>
>('small')();

export const Small = forwardRef<PropsWithChildren<SmallProps>>((props, ref) => (
  <SmallElement {...props} ref={ref} />
));

Small.displayName = 'Small';

export * from './small.types';
