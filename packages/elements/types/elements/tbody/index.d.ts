import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TbodyElementProps, TbodyProps } from './tbody.types';
export declare const stylinTbody: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TbodyElementProps & RefAttributes<TbodyElementProps>>;
export declare const Tbody: import("react").ForwardRefExoticComponent<TbodyProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TbodyElementProps>>;
export * from './tbody.types';
