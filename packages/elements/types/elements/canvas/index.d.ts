import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { CanvasElementProps, CanvasProps } from './canvas.types';
export declare const stylinCanvas: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & CanvasElementProps & RefAttributes<CanvasElementProps>>;
export declare const Canvas: import("react").ForwardRefExoticComponent<CanvasProps & {
    children?: import("react").ReactNode;
} & RefAttributes<CanvasElementProps>>;
export * from './canvas.types';
