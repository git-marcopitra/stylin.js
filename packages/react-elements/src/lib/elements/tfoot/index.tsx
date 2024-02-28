import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TfootElementProps, TfootProps } from './tfoot.types';

const TfootElement = stylin<
  TfootElementProps & RefAttributes<TfootElementProps>
>('tfoot')();

export const Tfoot = forwardRef<PropsWithChildren<TfootProps>>((props, ref) => (
  <TfootElement {...props} ref={ref} />
));

Tfoot.displayName = 'Tfoot';

export * from './tfoot.types';
