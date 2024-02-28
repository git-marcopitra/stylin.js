import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TextareaElementProps, TextareaProps } from './textarea.types';

const TextareaElement = stylin<
  TextareaElementProps & RefAttributes<TextareaElementProps>
>('textarea')();

export const Textarea = forwardRef<PropsWithChildren<TextareaProps>>(
  (props, ref) => <TextareaElement {...props} ref={ref} />
);

Textarea.displayName = 'Textarea';

export * from './textarea.types';
