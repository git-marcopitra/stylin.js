import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H6ElementProps, H6Props } from './h6.types';
export declare const stylinH6: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H6ElementProps & RefAttributes<H6ElementProps>>;
export declare const H6: import("react").ForwardRefExoticComponent<H6Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H6ElementProps>>;
export * from './h6.types';
