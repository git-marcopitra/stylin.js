import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { InputElementProps, InputProps } from './input.types';
export declare const stylinInput: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & InputElementProps & RefAttributes<InputElementProps>>;
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & {
    children?: import("react").ReactNode;
} & RefAttributes<InputElementProps>>;
export * from './input.types';
