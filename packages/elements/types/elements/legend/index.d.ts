import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { LegendElementProps, LegendProps } from './legend.types';
export declare const stylinLegend: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & LegendElementProps & RefAttributes<LegendElementProps>>;
export declare const Legend: import("react").ForwardRefExoticComponent<LegendProps & {
    children?: import("react").ReactNode;
} & RefAttributes<LegendElementProps>>;
export * from './legend.types';
