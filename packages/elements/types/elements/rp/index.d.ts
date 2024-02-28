import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { RpElementProps, RpProps } from './rp.types';
export declare const stylinRp: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & RpElementProps & RefAttributes<RpElementProps>>;
export declare const Rp: import("react").ForwardRefExoticComponent<RpProps & {
    children?: import("react").ReactNode;
} & RefAttributes<RpElementProps>>;
export * from './rp.types';
