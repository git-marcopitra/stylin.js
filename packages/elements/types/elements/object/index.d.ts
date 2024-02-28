import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ObjectElementProps, ObjectProps } from './object.types';
export declare const stylinObject: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ObjectElementProps & RefAttributes<ObjectElementProps>>;
export declare const Object: import("react").ForwardRefExoticComponent<ObjectProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ObjectElementProps>>;
export * from './object.types';
