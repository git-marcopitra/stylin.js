import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HgroupElementProps, HgroupProps } from './hgroup.types';

const HgroupElement = stylin<
  HgroupElementProps & RefAttributes<HgroupElementProps>
>('hgroup')();

export const Hgroup = forwardRef<PropsWithChildren<HgroupProps>>(
  (props, ref) => <HgroupElement {...props} ref={ref} />
);

Hgroup.displayName = 'Hgroup';

export * from './hgroup.types';
