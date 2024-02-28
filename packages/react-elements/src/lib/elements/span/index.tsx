import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SpanElementProps, SpanProps } from './span.types';

const SpanElement = stylin<SpanElementProps & RefAttributes<SpanElementProps>>(
  'span'
)();

export const Span = forwardRef<PropsWithChildren<SpanProps>>((props, ref) => (
  <SpanElement {...props} ref={ref} />
));

Span.displayName = 'Span';

export * from './span.types';
