import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SpanElementProps, SpanProps } from './span.types';

export const stylinSpan = stylin<
  SpanElementProps & RefAttributes<SpanElementProps>
>('span');

const SpanElement = stylinSpan();

export const Span = forwardRef<PropsWithChildren<SpanProps>>((props, ref) => (
  <SpanElement {...props} ref={ref} />
));

Span.displayName = 'Span';

export * from './span.types';
