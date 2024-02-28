import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BlockquoteElementProps, BlockquoteProps } from './blockquote.types';

export const stylinBlockquote = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & BlockquoteElementProps & RefAttributes<BlockquoteElementProps>>(
    'blockquote'
  )(...styles);

const BlockquoteElement = stylinBlockquote();

export const Blockquote = forwardRef<BlockquoteElementProps, PropsWithChildren<BlockquoteProps>>(
  (props, ref) => <BlockquoteElement {...props} ref={ref} />
);

Blockquote.displayName = 'Blockquote';

export * from './blockquote.types';
