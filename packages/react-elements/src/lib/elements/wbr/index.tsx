import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { WbrElementProps, WbrProps } from './wbr.types';

export const stylinWbr = stylin<
  WbrElementProps & RefAttributes<WbrElementProps>
>('wbr');

const WbrElement = stylinWbr();

export const Wbr = forwardRef<PropsWithChildren<WbrProps>>((props, ref) => (
  <WbrElement {...props} ref={ref} />
));

Wbr.displayName = 'Wbr';

export * from './wbr.types';
