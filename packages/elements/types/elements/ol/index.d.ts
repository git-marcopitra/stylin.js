import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { OlElementProps, OlProps } from './ol.types';
export declare const stylinOl: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & OlElementProps & RefAttributes<OlElementProps>>;
export declare const Ol: import("react").ForwardRefExoticComponent<OlProps & {
    children?: import("react").ReactNode;
} & RefAttributes<OlElementProps>>;
export * from './ol.types';
