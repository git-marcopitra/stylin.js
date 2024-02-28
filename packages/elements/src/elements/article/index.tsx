import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ArticleElementProps, ArticleProps } from './article.types';

export const stylinArticle = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ArticleElementProps & RefAttributes<ArticleElementProps>>(
    'article'
  )(...styles);

const ArticleElement = stylinArticle();

export const Article = forwardRef<ArticleElementProps, PropsWithChildren<ArticleProps>>(
  (props, ref) => <ArticleElement {...props} ref={ref} />
);

Article.displayName = 'Article';

export * from './article.types';
