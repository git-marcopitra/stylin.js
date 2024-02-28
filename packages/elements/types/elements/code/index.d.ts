import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { CodeElementProps, CodeProps } from './code.types';
export declare const stylinCode: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & CodeElementProps & RefAttributes<CodeElementProps>>;
export declare const Code: import("react").ForwardRefExoticComponent<CodeProps & {
    children?: import("react").ReactNode;
} & RefAttributes<CodeElementProps>>;
export * from './code.types';
