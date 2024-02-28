import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CodeElementProps, CodeProps } from './code.types';

const CodeElement = stylin<CodeElementProps & RefAttributes<CodeElementProps>>(
  'code'
)();

export const Code = forwardRef<PropsWithChildren<CodeProps>>((props, ref) => (
  <CodeElement {...props} ref={ref} />
));

Code.displayName = 'Code';

export * from './code.types';
