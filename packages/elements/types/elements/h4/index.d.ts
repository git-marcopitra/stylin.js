import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H4ElementProps, H4Props } from './h4.types';
export declare const stylinH4: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H4ElementProps & RefAttributes<H4ElementProps>>;
export declare const H4: import("react").ForwardRefExoticComponent<H4Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H4ElementProps>>;
export * from './h4.types';
