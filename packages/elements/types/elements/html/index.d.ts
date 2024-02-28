import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { HtmlElementProps, HtmlProps } from './html.types';
export declare const stylinHtml: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & HtmlElementProps & RefAttributes<HtmlElementProps>>;
export declare const Html: import("react").ForwardRefExoticComponent<HtmlProps & {
    children?: import("react").ReactNode;
} & RefAttributes<HtmlElementProps>>;
export * from './html.types';
