import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { VideoElementProps, VideoProps } from './video.types';
export declare const stylinVideo: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & VideoElementProps & RefAttributes<VideoElementProps>>;
export declare const Video: import("react").ForwardRefExoticComponent<VideoProps & {
    children?: import("react").ReactNode;
} & RefAttributes<VideoElementProps>>;
export * from './video.types';
