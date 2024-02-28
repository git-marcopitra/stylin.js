import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H1ElementProps, H1Props } from './h1.types';
export declare const stylinH1: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H1ElementProps & RefAttributes<H1ElementProps>>;
export declare const H1: import("react").ForwardRefExoticComponent<H1Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H1ElementProps>>;
export * from './h1.types';
