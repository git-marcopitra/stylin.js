import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { TemplateElementProps, TemplateProps } from './template.types';
export declare const stylinTemplate: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & TemplateElementProps & RefAttributes<TemplateElementProps>>;
export declare const Template: import("react").ForwardRefExoticComponent<TemplateProps & {
    children?: import("react").ReactNode;
} & RefAttributes<TemplateElementProps>>;
export * from './template.types';
