import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { MainElementProps, MainProps } from './main.types';
export declare const stylinMain: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & MainElementProps & RefAttributes<MainElementProps>>;
export declare const Main: import("react").ForwardRefExoticComponent<MainProps & {
    children?: import("react").ReactNode;
} & RefAttributes<MainElementProps>>;
export * from './main.types';
