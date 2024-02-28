import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TrElementProps, TrProps } from './tr.types';
export declare const stylinTr: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TrElementProps & RefAttributes<TrElementProps>>;
export declare const Tr: import("react").ForwardRefExoticComponent<TrProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TrElementProps>>;
export * from './tr.types';
