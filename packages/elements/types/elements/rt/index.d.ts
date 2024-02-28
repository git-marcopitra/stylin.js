import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { RtElementProps, RtProps } from './rt.types';
export declare const stylinRt: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & RtElementProps & RefAttributes<RtElementProps>>;
export declare const Rt: import("react").ForwardRefExoticComponent<RtProps & {
    children?: import("react").ReactNode;
} & RefAttributes<RtElementProps>>;
export * from './rt.types';
