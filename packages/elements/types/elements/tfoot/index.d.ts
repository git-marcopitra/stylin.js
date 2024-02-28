import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TfootElementProps, TfootProps } from './tfoot.types';
export declare const stylinTfoot: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TfootElementProps & RefAttributes<TfootElementProps>>;
export declare const Tfoot: import("react").ForwardRefExoticComponent<TfootProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TfootElementProps>>;
export * from './tfoot.types';
