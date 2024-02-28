import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { EmElementProps, EmProps } from './em.types';
export declare const stylinEm: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & EmElementProps & RefAttributes<EmElementProps>>;
export declare const Em: import("react").ForwardRefExoticComponent<EmProps & {
    children?: import("react").ReactNode;
} & RefAttributes<EmElementProps>>;
export * from './em.types';
