import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CodeElementProps, CodeProps } from './code.types';

export const stylinCode = stylin<
  CodeElementProps & RefAttributes<CodeElementProps>
>('code');

const CodeElement = stylinCode();

export const Code = forwardRef<PropsWithChildren<CodeProps>>((props, ref) => (
  <CodeElement {...props} ref={ref} />
));

Code.displayName = 'Code';

export * from './code.types';
