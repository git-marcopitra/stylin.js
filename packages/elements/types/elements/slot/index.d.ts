import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SlotElementProps, SlotProps } from './slot.types';
export declare const stylinSlot: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SlotElementProps & RefAttributes<SlotElementProps>>;
export declare const Slot: import("react").ForwardRefExoticComponent<SlotProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SlotElementProps>>;
export * from './slot.types';
