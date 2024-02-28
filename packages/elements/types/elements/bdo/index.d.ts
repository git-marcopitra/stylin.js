import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BdoElementProps, BdoProps } from './bdo.types';
export declare const stylinBdo: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BdoElementProps & RefAttributes<BdoElementProps>>;
export declare const Bdo: import("react").ForwardRefExoticComponent<BdoProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BdoElementProps>>;
export * from './bdo.types';
