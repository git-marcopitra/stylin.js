import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { MeterElementProps, MeterProps } from './meter.types';
export declare const stylinMeter: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & MeterElementProps & RefAttributes<MeterElementProps>>;
export declare const Meter: import("react").ForwardRefExoticComponent<MeterProps & {
    children?: import("react").ReactNode;
} & RefAttributes<MeterElementProps>>;
export * from './meter.types';
