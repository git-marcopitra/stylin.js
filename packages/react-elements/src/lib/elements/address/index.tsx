import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AddressElementProps, AddressProps } from './address.types';

const AddressElement = stylin<
  AddressElementProps & RefAttributes<AddressElementProps>
>('address')();

export const Address = forwardRef<PropsWithChildren<AddressProps>>(
  (props, ref) => <AddressElement {...props} ref={ref} />
);

Address.displayName = 'Address';

export * from './address.types';
