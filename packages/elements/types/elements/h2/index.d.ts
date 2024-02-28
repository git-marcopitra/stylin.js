import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H2ElementProps, H2Props } from './h2.types';
export declare const stylinH2: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H2ElementProps & RefAttributes<H2ElementProps>>;
export declare const H2: import("react").ForwardRefExoticComponent<H2Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H2ElementProps>>;
export * from './h2.types';
