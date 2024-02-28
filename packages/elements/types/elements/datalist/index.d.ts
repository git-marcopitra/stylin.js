import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DatalistElementProps, DatalistProps } from './datalist.types';
export declare const stylinDatalist: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DatalistElementProps & RefAttributes<DatalistElementProps>>;
export declare const Datalist: import("react").ForwardRefExoticComponent<DatalistProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DatalistElementProps>>;
export * from './datalist.types';
