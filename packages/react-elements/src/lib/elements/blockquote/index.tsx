import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BlockquoteElementProps, BlockquoteProps } from './blockquote.types';

const BlockquoteElement = stylin<
  BlockquoteElementProps & RefAttributes<BlockquoteElementProps>
>('blockquote')();

export const Blockquote = forwardRef<PropsWithChildren<BlockquoteProps>>(
  (props, ref) => <BlockquoteElement {...props} ref={ref} />
);

Blockquote.displayName = 'Blockquote';

export * from './blockquote.types';
