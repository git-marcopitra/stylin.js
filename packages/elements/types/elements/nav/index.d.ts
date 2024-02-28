import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { NavElementProps, NavProps } from './nav.types';
export declare const stylinNav: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & NavElementProps & RefAttributes<NavElementProps>>;
export declare const Nav: import("react").ForwardRefExoticComponent<NavProps & {
    children?: import("react").ReactNode;
} & RefAttributes<NavElementProps>>;
export * from './nav.types';
