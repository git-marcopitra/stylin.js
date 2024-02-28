import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { AsideElementProps, AsideProps } from './aside.types';
export declare const stylinAside: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & AsideElementProps & RefAttributes<AsideElementProps>>;
export declare const Aside: import("react").ForwardRefExoticComponent<AsideProps & {
    children?: import("react").ReactNode;
} & RefAttributes<AsideElementProps>>;
export * from './aside.types';
