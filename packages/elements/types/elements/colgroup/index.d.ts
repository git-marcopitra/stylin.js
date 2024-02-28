import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ColgroupElementProps, ColgroupProps } from './colgroup.types';
export declare const stylinColgroup: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ColgroupElementProps & RefAttributes<ColgroupElementProps>>;
export declare const Colgroup: import("react").ForwardRefExoticComponent<ColgroupProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ColgroupElementProps>>;
export * from './colgroup.types';
