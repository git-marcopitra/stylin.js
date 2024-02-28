import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SelectElementProps, SelectProps } from './select.types';
export declare const stylinSelect: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SelectElementProps & RefAttributes<SelectElementProps>>;
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SelectElementProps>>;
export * from './select.types';
