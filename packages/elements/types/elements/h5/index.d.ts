import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { H5ElementProps, H5Props } from './h5.types';
export declare const stylinH5: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & H5ElementProps & RefAttributes<H5ElementProps>>;
export declare const H5: import("react").ForwardRefExoticComponent<H5Props & {
    children?: import("react").ReactNode;
} & RefAttributes<H5ElementProps>>;
export * from './h5.types';
