import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { AudioElementProps, AudioProps } from './audio.types';
export declare const stylinAudio: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & AudioElementProps & RefAttributes<AudioElementProps>>;
export declare const Audio: import("react").ForwardRefExoticComponent<AudioProps & {
    children?: import("react").ReactNode;
} & RefAttributes<AudioElementProps>>;
export * from './audio.types';
