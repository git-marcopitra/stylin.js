import { CreateStylinArguments } from '@stylin.js/react';
import { RefAttributes } from 'react';
import { ArticleElementProps, ArticleProps } from './article.types';
export declare const stylinArticle: <T extends Record<string, unknown>>(...styles: CreateStylinArguments) => import("@stylin.js/react").StylinComponent<T & ArticleElementProps & RefAttributes<ArticleElementProps>>;
export declare const Article: import("react").ForwardRefExoticComponent<ArticleProps & {
    children?: import("react").ReactNode;
} & RefAttributes<ArticleElementProps>>;
export * from './article.types';
