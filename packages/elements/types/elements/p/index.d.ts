import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { PElementProps, PProps } from './p.types';
export declare const stylinP: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & PElementProps & RefAttributes<PElementProps>>;
export declare const P: import("react").ForwardRefExoticComponent<PProps & {
    children?: import("react").ReactNode;
} & RefAttributes<PElementProps>>;
export * from './p.types';
