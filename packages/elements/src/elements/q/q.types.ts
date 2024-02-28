import { StylinComponentProps } from '@stylin.js/react';
import { QuoteHTMLAttributes } from 'react';

export type QElementProps = Omit<
  QuoteHTMLAttributes<HTMLQuoteElement>,
  'color' | 'translate'
>;

export interface QProps extends StylinComponentProps, QElementProps {}
