import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColgroupElementProps, ColgroupProps } from './colgroup.types';

export const stylinColgroup = stylin<
  ColgroupElementProps & RefAttributes<ColgroupElementProps>
>('colgroup');

const ColgroupElement = stylinColgroup();

export const Colgroup = forwardRef<PropsWithChildren<ColgroupProps>>(
  (props, ref) => <ColgroupElement {...props} ref={ref} />
);

Colgroup.displayName = 'Colgroup';

export * from './colgroup.types';
