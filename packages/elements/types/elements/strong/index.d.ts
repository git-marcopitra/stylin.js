import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { StrongElementProps, StrongProps } from './strong.types';
export declare const stylinStrong: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & StrongElementProps & RefAttributes<StrongElementProps>>;
export declare const Strong: import("react").ForwardRefExoticComponent<StrongProps & {
    children?: import("react").ReactNode;
} & RefAttributes<StrongElementProps>>;
export * from './strong.types';
