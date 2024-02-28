import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TableElementProps, TableProps } from './table.types';
export declare const stylinTable: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TableElementProps & RefAttributes<TableElementProps>>;
export declare const Table: import("react").ForwardRefExoticComponent<TableProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TableElementProps>>;
export * from './table.types';
