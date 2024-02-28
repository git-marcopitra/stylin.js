import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SubElementProps, SubProps } from './sub.types';
export declare const stylinSub: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SubElementProps & RefAttributes<SubElementProps>>;
export declare const Sub: import("react").ForwardRefExoticComponent<SubProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SubElementProps>>;
export * from './sub.types';
