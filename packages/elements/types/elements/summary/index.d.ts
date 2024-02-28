import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SummaryElementProps, SummaryProps } from './summary.types';
export declare const stylinSummary: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SummaryElementProps & RefAttributes<SummaryElementProps>>;
export declare const Summary: import("react").ForwardRefExoticComponent<SummaryProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SummaryElementProps>>;
export * from './summary.types';
