import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DlElementProps, DlProps } from './dl.types';
export declare const stylinDl: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DlElementProps & RefAttributes<DlElementProps>>;
export declare const Dl: import("react").ForwardRefExoticComponent<DlProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DlElementProps>>;
export * from './dl.types';
