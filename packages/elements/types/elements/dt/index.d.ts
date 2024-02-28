import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DtElementProps, DtProps } from './dt.types';
export declare const stylinDt: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DtElementProps & RefAttributes<DtElementProps>>;
export declare const Dt: import("react").ForwardRefExoticComponent<DtProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DtElementProps>>;
export * from './dt.types';
