import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ArticleElementProps, ArticleProps } from './article.types';

const ArticleElement = stylin<
  ArticleElementProps & RefAttributes<ArticleElementProps>
>('article')();

export const Article = forwardRef<PropsWithChildren<ArticleProps>>(
  (props, ref) => <ArticleElement {...props} ref={ref} />
);

Article.displayName = 'Article';

export * from './article.types';
