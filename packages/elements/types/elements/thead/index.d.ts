import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TheadElementProps, TheadProps } from './thead.types';
export declare const stylinThead: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TheadElementProps & RefAttributes<TheadElementProps>>;
export declare const Thead: import("react").ForwardRefExoticComponent<TheadProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TheadElementProps>>;
export * from './thead.types';
