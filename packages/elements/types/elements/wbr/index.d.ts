import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { WbrElementProps, WbrProps } from './wbr.types';
export declare const stylinWbr: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & WbrElementProps & RefAttributes<WbrElementProps>>;
export declare const Wbr: import("react").ForwardRefExoticComponent<WbrProps & RefAttributes<WbrElementProps>>;
export * from './wbr.types';
