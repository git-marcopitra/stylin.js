import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { IframeElementProps, IframeProps } from './iframe.types';
export declare const stylinIframe: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & IframeElementProps & RefAttributes<IframeElementProps>>;
export declare const Iframe: import("react").ForwardRefExoticComponent<IframeProps & RefAttributes<IframeElementProps>>;
export * from './iframe.types';
