import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BrElementProps, BrProps } from './br.types';
export declare const stylinBr: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BrElementProps & RefAttributes<BrElementProps>>;
export declare const Br: import("react").ForwardRefExoticComponent<BrProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BrElementProps>>;
export * from './br.types';
