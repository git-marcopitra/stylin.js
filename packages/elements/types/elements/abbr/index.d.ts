import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { AbbrElementProps, AbbrProps } from './abbr.types';
export declare const stylinAbbr: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & AbbrElementProps & RefAttributes<AbbrElementProps>>;
export declare const Abbr: import("react").ForwardRefExoticComponent<AbbrProps & {
    children?: import("react").ReactNode;
} & RefAttributes<AbbrElementProps>>;
export * from './abbr.types';
