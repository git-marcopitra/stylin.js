import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DialogElementProps, DialogProps } from './dialog.types';
export declare const stylinDialog: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DialogElementProps & RefAttributes<DialogElementProps>>;
export declare const Dialog: import("react").ForwardRefExoticComponent<DialogProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DialogElementProps>>;
export * from './dialog.types';
