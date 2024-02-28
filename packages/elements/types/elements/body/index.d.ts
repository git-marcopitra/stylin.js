import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BodyElementProps, BodyProps } from './body.types';
export declare const stylinBody: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BodyElementProps & RefAttributes<BodyElementProps>>;
export declare const Body: import("react").ForwardRefExoticComponent<BodyProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BodyElementProps>>;
export * from './body.types';
