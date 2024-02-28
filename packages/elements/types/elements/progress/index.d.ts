import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ProgressElementProps, ProgressProps } from './progress.types';
export declare const stylinProgress: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ProgressElementProps & RefAttributes<ProgressElementProps>>;
export declare const Progress: import("react").ForwardRefExoticComponent<ProgressProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ProgressElementProps>>;
export * from './progress.types';
