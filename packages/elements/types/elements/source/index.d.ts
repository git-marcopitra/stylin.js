import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SourceElementProps, SourceProps } from './source.types';
export declare const stylinSource: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SourceElementProps & RefAttributes<SourceElementProps>>;
export declare const Source: import("react").ForwardRefExoticComponent<SourceProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SourceElementProps>>;
export * from './source.types';
