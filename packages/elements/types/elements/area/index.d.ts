import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { AreaElementProps, AreaProps } from './area.types';
export declare const stylinArea: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & AreaElementProps & RefAttributes<AreaElementProps>>;
export declare const Area: import("react").ForwardRefExoticComponent<AreaProps & RefAttributes<AreaElementProps>>;
export * from './area.types';
