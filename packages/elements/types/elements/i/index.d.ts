import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { IElementProps, IProps } from './i.types';
export declare const stylinI: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & IElementProps & RefAttributes<IElementProps>>;
export declare const I: import("react").ForwardRefExoticComponent<IProps & {
    children?: import("react").ReactNode;
} & RefAttributes<IElementProps>>;
export * from './i.types';
