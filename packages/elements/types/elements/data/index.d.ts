import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DataElementProps, DataProps } from './data.types';
export declare const stylinData: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DataElementProps & RefAttributes<DataElementProps>>;
export declare const Data: import("react").ForwardRefExoticComponent<DataProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DataElementProps>>;
export * from './data.types';
