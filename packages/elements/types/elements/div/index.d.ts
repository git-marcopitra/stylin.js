import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DivElementProps, DivProps } from './div.types';
export declare const stylinDiv: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DivElementProps & RefAttributes<DivElementProps>>;
export declare const Div: import("react").ForwardRefExoticComponent<DivProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DivElementProps>>;
export * from './div.types';
