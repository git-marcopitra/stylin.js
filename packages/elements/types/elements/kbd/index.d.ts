import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { KbdElementProps, KbdProps } from './kbd.types';
export declare const stylinKbd: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & KbdElementProps & RefAttributes<KbdElementProps>>;
export declare const Kbd: import("react").ForwardRefExoticComponent<KbdProps & {
    children?: import("react").ReactNode;
} & RefAttributes<KbdElementProps>>;
export * from './kbd.types';
