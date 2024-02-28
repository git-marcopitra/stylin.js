import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { OptionElementProps, OptionProps } from './option.types';
export declare const stylinOption: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & OptionElementProps & RefAttributes<OptionElementProps>>;
export declare const Option: import("react").ForwardRefExoticComponent<OptionProps & {
    children?: import("react").ReactNode;
} & RefAttributes<OptionElementProps>>;
export * from './option.types';
