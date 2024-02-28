import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { MenuElementProps, MenuProps } from './menu.types';
export declare const stylinMenu: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & MenuElementProps & RefAttributes<MenuElementProps>>;
export declare const Menu: import("react").ForwardRefExoticComponent<MenuProps & {
    children?: import("react").ReactNode;
} & RefAttributes<MenuElementProps>>;
export * from './menu.types';
