import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { MapElementProps, MapProps } from './map.types';
export declare const stylinMap: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & MapElementProps & RefAttributes<MapElementProps>>;
export declare const Map: import("react").ForwardRefExoticComponent<MapProps & {
    children?: import("react").ReactNode;
} & RefAttributes<MapElementProps>>;
export * from './map.types';
