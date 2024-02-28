import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { FieldsetElementProps, FieldsetProps } from './fieldset.types';
export declare const stylinFieldset: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & FieldsetElementProps & RefAttributes<FieldsetElementProps>>;
export declare const Fieldset: import("react").ForwardRefExoticComponent<FieldsetProps & {
    children?: import("react").ReactNode;
} & RefAttributes<FieldsetElementProps>>;
export * from './fieldset.types';
