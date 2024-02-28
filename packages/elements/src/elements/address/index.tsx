import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AddressElementProps, AddressProps } from './address.types';

export const stylinAddress = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & AddressElementProps & RefAttributes<AddressElementProps>>(
    'address'
  )(...styles);

const AddressElement = stylinAddress();

export const Address = forwardRef<AddressElementProps, PropsWithChildren<AddressProps>>(
  (props, ref) => <AddressElement {...props} ref={ref} />
);

Address.displayName = 'Address';

export * from './address.types';
