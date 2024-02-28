import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TdElementProps, TdProps } from './td.types';
export declare const stylinTd: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TdElementProps & RefAttributes<TdElementProps>>;
export declare const Td: import("react").ForwardRefExoticComponent<TdProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TdElementProps>>;
export * from './td.types';
