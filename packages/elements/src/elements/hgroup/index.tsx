import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HgroupElementProps, HgroupProps } from './hgroup.types';

export const stylinHgroup = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & HgroupElementProps & RefAttributes<HgroupElementProps>>('hgroup')(
    ...styles
  );

const HgroupElement = stylinHgroup();

export const Hgroup = forwardRef<PropsWithChildren<HgroupProps>>(
  (props, ref) => <HgroupElement {...props} ref={ref} />
);

Hgroup.displayName = 'Hgroup';

export * from './hgroup.types';
