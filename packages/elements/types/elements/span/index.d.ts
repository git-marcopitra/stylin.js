import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SpanElementProps, SpanProps } from './span.types';
export declare const stylinSpan: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SpanElementProps & RefAttributes<SpanElementProps>>;
export declare const Span: import("react").ForwardRefExoticComponent<SpanProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SpanElementProps>>;
export * from './span.types';
