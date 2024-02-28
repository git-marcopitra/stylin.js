import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { SectionElementProps, SectionProps } from './section.types';
export declare const stylinSection: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & SectionElementProps & RefAttributes<SectionElementProps>>;
export declare const Section: import("react").ForwardRefExoticComponent<SectionProps & {
    children?: import("react").ReactNode;
} & RefAttributes<SectionElementProps>>;
export * from './section.types';
