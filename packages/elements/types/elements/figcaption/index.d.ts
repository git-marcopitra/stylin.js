import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { FigcaptionElementProps, FigcaptionProps } from './figcaption.types';
export declare const stylinFigcaption: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & FigcaptionElementProps & RefAttributes<FigcaptionElementProps>>;
export declare const Figcaption: import("react").ForwardRefExoticComponent<FigcaptionProps & {
    children?: import("react").ReactNode;
} & RefAttributes<FigcaptionElementProps>>;
export * from './figcaption.types';
