import { StylinComponentProps } from '@stylin.js/react';
import { BlockquoteHTMLAttributes } from 'react';
export type BlockquoteElementProps = Omit<BlockquoteHTMLAttributes<HTMLQuoteElement>, 'color' | 'translate'>;
export interface BlockquoteProps extends StylinComponentProps, BlockquoteElementProps {
}
