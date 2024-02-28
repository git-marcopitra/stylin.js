import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type ArticleElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface ArticleProps
  extends StylinComponentProps,
    ArticleElementProps {}
