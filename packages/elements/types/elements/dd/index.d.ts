import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DdElementProps, DdProps } from './dd.types';
export declare const stylinDd: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DdElementProps & RefAttributes<DdElementProps>>;
export declare const Dd: import("react").ForwardRefExoticComponent<DdProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DdElementProps>>;
export * from './dd.types';
