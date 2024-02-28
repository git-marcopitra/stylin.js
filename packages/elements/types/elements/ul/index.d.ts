import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { UlElementProps, UlProps } from './ul.types';
export declare const stylinUl: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & UlElementProps & RefAttributes<UlElementProps>>;
export declare const Ul: import("react").ForwardRefExoticComponent<UlProps & {
    children?: import("react").ReactNode;
} & RefAttributes<UlElementProps>>;
export * from './ul.types';
