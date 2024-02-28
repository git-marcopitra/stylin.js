import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TimeElementProps, TimeProps } from './time.types';
export declare const stylinTime: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TimeElementProps & RefAttributes<TimeElementProps>>;
export declare const Time: import("react").ForwardRefExoticComponent<TimeProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TimeElementProps>>;
export * from './time.types';
