import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { VarElementProps, VarProps } from './var.types';
export declare const stylinVar: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & VarElementProps & RefAttributes<VarElementProps>>;
export declare const Var: import("react").ForwardRefExoticComponent<VarProps & {
    children?: import("react").ReactNode;
} & RefAttributes<VarElementProps>>;
export * from './var.types';
