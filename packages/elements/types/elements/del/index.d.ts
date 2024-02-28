import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DelElementProps, DelProps } from './del.types';
export declare const stylinDel: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DelElementProps & RefAttributes<DelElementProps>>;
export declare const Del: import("react").ForwardRefExoticComponent<DelProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DelElementProps>>;
export * from './del.types';
