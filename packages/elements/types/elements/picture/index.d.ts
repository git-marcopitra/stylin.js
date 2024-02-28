import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { PictureElementProps, PictureProps } from './picture.types';
export declare const stylinPicture: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & PictureElementProps & RefAttributes<PictureElementProps>>;
export declare const Picture: import("react").ForwardRefExoticComponent<PictureProps & {
    children?: import("react").ReactNode;
} & RefAttributes<PictureElementProps>>;
export * from './picture.types';
