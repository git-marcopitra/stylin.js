import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { DetailsElementProps, DetailsProps } from './details.types';
export declare const stylinDetails: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & DetailsElementProps & RefAttributes<DetailsElementProps>>;
export declare const Details: import("react").ForwardRefExoticComponent<DetailsProps & {
    children?: import("react").ReactNode;
} & RefAttributes<DetailsElementProps>>;
export * from './details.types';
