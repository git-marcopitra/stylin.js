import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptgroupElementProps, OptgroupProps } from './optgroup.types';

export const stylinOptgroup = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & OptgroupElementProps & RefAttributes<OptgroupElementProps>>(
    'optgroup'
  )(...styles);

const OptgroupElement = stylinOptgroup();

export const Optgroup = forwardRef<OptgroupElementProps, PropsWithChildren<OptgroupProps>>(
  (props, ref) => <OptgroupElement {...props} ref={ref} />
);

Optgroup.displayName = 'Optgroup';

export * from './optgroup.types';
