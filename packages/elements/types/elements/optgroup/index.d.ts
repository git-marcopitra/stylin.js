import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { OptgroupElementProps, OptgroupProps } from './optgroup.types';
export declare const stylinOptgroup: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & OptgroupElementProps & RefAttributes<OptgroupElementProps>>;
export declare const Optgroup: import("react").ForwardRefExoticComponent<OptgroupProps & {
    children?: import("react").ReactNode;
} & RefAttributes<OptgroupElementProps>>;
export * from './optgroup.types';
