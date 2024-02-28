import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { FooterElementProps, FooterProps } from './footer.types';
export declare const stylinFooter: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & FooterElementProps & RefAttributes<FooterElementProps>>;
export declare const Footer: import("react").ForwardRefExoticComponent<FooterProps & {
    children?: import("react").ReactNode;
} & RefAttributes<FooterElementProps>>;
export * from './footer.types';
