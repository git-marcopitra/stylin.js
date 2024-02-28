import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { FigureElementProps, FigureProps } from './figure.types';
export declare const stylinFigure: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & FigureElementProps & RefAttributes<FigureElementProps>>;
export declare const Figure: import("react").ForwardRefExoticComponent<FigureProps & {
    children?: import("react").ReactNode;
} & RefAttributes<FigureElementProps>>;
export * from './figure.types';
