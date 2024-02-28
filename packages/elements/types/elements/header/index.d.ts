import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { HeaderElementProps, HeaderProps } from './header.types';
export declare const stylinHeader: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & HeaderElementProps & RefAttributes<HeaderElementProps>>;
export declare const Header: import("react").ForwardRefExoticComponent<HeaderProps & {
    children?: import("react").ReactNode;
} & RefAttributes<HeaderElementProps>>;
export * from './header.types';
