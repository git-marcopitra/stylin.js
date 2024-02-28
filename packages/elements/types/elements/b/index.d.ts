import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BElementProps, BProps } from './b.types';
export declare const stylinB: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BElementProps & RefAttributes<BElementProps>>;
export declare const B: import("react").ForwardRefExoticComponent<BProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BElementProps>>;
export * from './b.types';
