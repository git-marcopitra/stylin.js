import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HrElementProps, HrProps } from './hr.types';

export const stylinHr = stylin<HrElementProps & RefAttributes<HrElementProps>>(
  'hr'
);

const HrElement = stylinHr();

export const Hr = forwardRef<PropsWithChildren<HrProps>>((props, ref) => (
  <HrElement {...props} ref={ref} />
));

Hr.displayName = 'Hr';

export * from './hr.types';
