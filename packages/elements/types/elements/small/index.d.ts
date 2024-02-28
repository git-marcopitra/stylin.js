import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SmallElementProps, SmallProps } from './small.types';
export declare const stylinSmall: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SmallElementProps & RefAttributes<SmallElementProps>>;
export declare const Small: import("react").ForwardRefExoticComponent<SmallProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SmallElementProps>>;
export * from './small.types';
