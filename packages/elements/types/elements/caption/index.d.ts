import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { CaptionElementProps, CaptionProps } from './caption.types';
export declare const stylinCaption: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & CaptionElementProps & RefAttributes<CaptionElementProps>>;
export declare const Caption: import("react").ForwardRefExoticComponent<CaptionProps & {
    children?: import("react").ReactNode;
} & RefAttributes<CaptionElementProps>>;
export * from './caption.types';
