import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { HrElementProps, HrProps } from './hr.types';
export declare const stylinHr: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & HrElementProps & RefAttributes<HrElementProps>>;
export declare const Hr: import("react").ForwardRefExoticComponent<HrProps & RefAttributes<HrElementProps>>;
export * from './hr.types';
