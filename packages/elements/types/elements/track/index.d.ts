import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TrackElementProps, TrackProps } from './track.types';
export declare const stylinTrack: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TrackElementProps & RefAttributes<TrackElementProps>>;
export declare const Track: import("react").ForwardRefExoticComponent<TrackProps & RefAttributes<TrackElementProps>>;
export * from './track.types';
