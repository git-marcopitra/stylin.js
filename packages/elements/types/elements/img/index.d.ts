import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ImgElementProps, ImgProps } from './img.types';
export declare const stylinImg: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ImgElementProps & RefAttributes<ImgElementProps>>;
export declare const Img: import("react").ForwardRefExoticComponent<ImgProps & RefAttributes<ImgElementProps>>;
export * from './img.types';
