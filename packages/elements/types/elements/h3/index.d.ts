import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H3ElementProps, H3Props } from './h3.types';
export declare const stylinH3: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H3ElementProps & RefAttributes<H3ElementProps>>;
export declare const H3: import("react").ForwardRefExoticComponent<H3Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H3ElementProps>>;
export * from './h3.types';
