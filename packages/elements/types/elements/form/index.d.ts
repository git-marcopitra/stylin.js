import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { FormElementProps, FormProps } from './form.types';
export declare const stylinForm: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & FormElementProps & RefAttributes<FormElementProps>>;
export declare const Form: import("react").ForwardRefExoticComponent<FormProps & {
    children?: import("react").ReactNode;
} & RefAttributes<FormElementProps>>;
export * from './form.types';
