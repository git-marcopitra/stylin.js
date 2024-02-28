import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TextareaElementProps, TextareaProps } from './textarea.types';
export declare const stylinTextarea: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TextareaElementProps & RefAttributes<TextareaElementProps>>;
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TextareaElementProps>>;
export * from './textarea.types';
