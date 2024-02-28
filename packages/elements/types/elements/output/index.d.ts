import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { OutputElementProps, OutputProps } from './output.types';
export declare const stylinOutput: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & OutputElementProps & RefAttributes<OutputElementProps>>;
export declare const Output: import("react").ForwardRefExoticComponent<OutputProps & {
    children?: import("react").ReactNode;
} & RefAttributes<OutputElementProps>>;
export * from './output.types';
