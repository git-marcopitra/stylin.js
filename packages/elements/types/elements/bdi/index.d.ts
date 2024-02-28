import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BdiElementProps, BdiProps } from './bdi.types';
export declare const stylinBdi: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BdiElementProps & RefAttributes<BdiElementProps>>;
export declare const Bdi: import("react").ForwardRefExoticComponent<BdiProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BdiElementProps>>;
export * from './bdi.types';
