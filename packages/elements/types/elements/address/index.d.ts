import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { AddressElementProps, AddressProps } from './address.types';
export declare const stylinAddress: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & AddressElementProps & RefAttributes<AddressElementProps>>;
export declare const Address: import("react").ForwardRefExoticComponent<AddressProps & {
    children?: import("react").ReactNode;
} & RefAttributes<AddressElementProps>>;
export * from './address.types';
