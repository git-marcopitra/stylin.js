import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { LabelElementProps, LabelProps } from './label.types';
export declare const stylinLabel: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & LabelElementProps & RefAttributes<LabelElementProps>>;
export declare const Label: import("react").ForwardRefExoticComponent<LabelProps & {
    children?: import("react").ReactNode;
} & RefAttributes<LabelElementProps>>;
export * from './label.types';
