import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SampElementProps, SampProps } from './samp.types';
export declare const stylinSamp: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SampElementProps & RefAttributes<SampElementProps>>;
export declare const Samp: import("react").ForwardRefExoticComponent<SampProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SampElementProps>>;
export * from './samp.types';
