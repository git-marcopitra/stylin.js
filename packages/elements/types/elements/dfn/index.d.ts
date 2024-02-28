import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DfnElementProps, DfnProps } from './dfn.types';
export declare const stylinDfn: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DfnElementProps & RefAttributes<DfnElementProps>>;
export declare const Dfn: import("react").ForwardRefExoticComponent<DfnProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DfnElementProps>>;
export * from './dfn.types';
