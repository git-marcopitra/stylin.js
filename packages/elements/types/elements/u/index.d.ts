import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { UElementProps, UProps } from './u.types';
export declare const stylinU: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & UElementProps & RefAttributes<UElementProps>>;
export declare const U: import("react").ForwardRefExoticComponent<UProps & {
    children?: import("react").ReactNode;
} & RefAttributes<UElementProps>>;
export * from './u.types';
