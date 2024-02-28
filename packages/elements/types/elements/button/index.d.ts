import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ButtonElementProps, ButtonProps } from './button.types';
export declare const stylinButton: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ButtonElementProps & RefAttributes<ButtonElementProps>>;
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ButtonElementProps>>;
export * from './button.types';
