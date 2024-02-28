import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { RubyElementProps, RubyProps } from './ruby.types';
export declare const stylinRuby: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & RubyElementProps & RefAttributes<RubyElementProps>>;
export declare const Ruby: import("react").ForwardRefExoticComponent<RubyProps & {
    children?: import("react").ReactNode;
} & RefAttributes<RubyElementProps>>;
export * from './ruby.types';
