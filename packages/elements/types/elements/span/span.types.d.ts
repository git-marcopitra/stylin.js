import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type SpanElementProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'translate' | 'width' | 'height'>;
export interface SpanProps extends StylinComponentProps, SpanElementProps {
}
