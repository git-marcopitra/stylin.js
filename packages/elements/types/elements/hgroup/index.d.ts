import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { HgroupElementProps, HgroupProps } from './hgroup.types';
export declare const stylinHgroup: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & HgroupElementProps & RefAttributes<HgroupElementProps>>;
export declare const Hgroup: import("react").ForwardRefExoticComponent<HgroupProps & {
    children?: import("react").ReactNode;
} & RefAttributes<HgroupElementProps>>;
export * from './hgroup.types';
