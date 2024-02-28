import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ArticleElementProps, ArticleProps } from './article.types';

export const stylinArticle = stylin<
  ArticleElementProps & RefAttributes<ArticleElementProps>
>('article');

const ArticleElement = stylinArticle();

export const Article = forwardRef<PropsWithChildren<ArticleProps>>(
  (props, ref) => <ArticleElement {...props} ref={ref} />
);

Article.displayName = 'Article';

export * from './article.types';
