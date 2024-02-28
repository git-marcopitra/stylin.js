import { CreateStylinArguments } from '@stylin.js/react';
import { PropsWithChildren, RefAttributes } from 'react';
import { CiteElementProps, CiteProps } from './cite.types';
export declare const stylinCite: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & CiteElementProps & RefAttributes<CiteElementProps>>;
export declare const Cite: import("react").ForwardRefExoticComponent<RefAttributes<PropsWithChildren<CiteProps>>>;
export * from './cite.types';
