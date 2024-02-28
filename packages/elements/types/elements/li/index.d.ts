import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { LiElementProps, LiProps } from './li.types';
export declare const stylinLi: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & LiElementProps & RefAttributes<LiElementProps>>;
export declare const Li: import("react").ForwardRefExoticComponent<LiProps & {
    children?: import("react").ReactNode;
} & RefAttributes<LiElementProps>>;
export * from './li.types';
