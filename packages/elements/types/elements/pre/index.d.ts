import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { PreElementProps, PreProps } from './pre.types';
export declare const stylinPre: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & PreElementProps & RefAttributes<PreElementProps>>;
export declare const Pre: import("react").ForwardRefExoticComponent<PreProps & {
    children?: import("react").ReactNode;
} & RefAttributes<PreElementProps>>;
export * from './pre.types';
