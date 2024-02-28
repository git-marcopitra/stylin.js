import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdoElementProps, BdoProps } from './bdo.types';

const BdoElement = stylin<BdoElementProps & RefAttributes<BdoElementProps>>(
  'bdo'
)();

export const Bdo = forwardRef<PropsWithChildren<BdoProps>>((props, ref) => (
  <BdoElement {...props} ref={ref} />
));

Bdo.displayName = 'Bdo';

export * from './bdo.types';
