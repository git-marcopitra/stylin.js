import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SupElementProps, SupProps } from './sup.types';
export declare const stylinSup: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SupElementProps & RefAttributes<SupElementProps>>;
export declare const Sup: import("react").ForwardRefExoticComponent<SupProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SupElementProps>>;
export * from './sup.types';
