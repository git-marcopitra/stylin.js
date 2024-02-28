import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { EmbedElementProps, EmbedProps } from './embed.types';
export declare const stylinEmbed: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & EmbedElementProps & RefAttributes<EmbedElementProps>>;
export declare const Embed: import("react").ForwardRefExoticComponent<EmbedProps & RefAttributes<EmbedElementProps>>;
export * from './embed.types';
