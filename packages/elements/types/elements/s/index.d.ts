import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SElementProps, SProps } from './s.types';
export declare const stylinS: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SElementProps & RefAttributes<SElementProps>>;
export declare const S: import("react").ForwardRefExoticComponent<SProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SElementProps>>;
export * from './s.types';
