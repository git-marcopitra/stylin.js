import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { InsElementProps, InsProps } from './ins.types';
export declare const stylinIns: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & InsElementProps & RefAttributes<InsElementProps>>;
export declare const Ins: import("react").ForwardRefExoticComponent<InsProps & {
    children?: import("react").ReactNode;
} & RefAttributes<InsElementProps>>;
export * from './ins.types';
