import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { BlockquoteElementProps, BlockquoteProps } from './blockquote.types';
export declare const stylinBlockquote: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & BlockquoteElementProps & RefAttributes<BlockquoteElementProps>>;
export declare const Blockquote: import("react").ForwardRefExoticComponent<BlockquoteProps & {
    children?: import("react").ReactNode;
} & RefAttributes<BlockquoteElementProps>>;
export * from './blockquote.types';
