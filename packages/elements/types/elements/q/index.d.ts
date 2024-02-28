import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { QElementProps, QProps } from './q.types';
export declare const stylinQ: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & QElementProps & RefAttributes<QElementProps>>;
export declare const Q: import("react").ForwardRefExoticComponent<QProps & {
    children?: import("react").ReactNode;
} & RefAttributes<QElementProps>>;
export * from './q.types';
