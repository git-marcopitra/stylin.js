import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptgroupElementProps, OptgroupProps } from './optgroup.types';

export const stylinOptgroup = stylin<
  OptgroupElementProps & RefAttributes<OptgroupElementProps>
>('optgroup');

const OptgroupElement = stylinOptgroup();

export const Optgroup = forwardRef<PropsWithChildren<OptgroupProps>>(
  (props, ref) => <OptgroupElement {...props} ref={ref} />
);

Optgroup.displayName = 'Optgroup';

export * from './optgroup.types';
