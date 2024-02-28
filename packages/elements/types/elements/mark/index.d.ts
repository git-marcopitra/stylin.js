import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { MarkElementProps, MarkProps } from './mark.types';
export declare const stylinMark: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & MarkElementProps & RefAttributes<MarkElementProps>>;
export declare const Mark: import("react").ForwardRefExoticComponent<MarkProps & {
    children?: import("react").ReactNode;
} & RefAttributes<MarkElementProps>>;
export * from './mark.types';
