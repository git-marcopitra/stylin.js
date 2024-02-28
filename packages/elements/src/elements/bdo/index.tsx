import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdoElementProps, BdoProps } from './bdo.types';

export const stylinBdo = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & 
  BdoElementProps & RefAttributes<BdoElementProps>
>('bdo');

const BdoElement = stylinBdo();

export const Bdo = forwardRef<PropsWithChildren<BdoProps>>((props, ref) => (
  <BdoElement {...props} ref={ref} />
));

Bdo.displayName = 'Bdo';

export * from './bdo.types';
