import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ColElementProps, ColProps } from './col.types';
export declare const stylinCol: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ColElementProps & RefAttributes<ColElementProps>>;
export declare const Col: import("react").ForwardRefExoticComponent<ColProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ColElementProps>>;
export * from './col.types';
