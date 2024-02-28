import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CodeElementProps, CodeProps } from './code.types';

export const Code = forwardRef<PropsWithChildren<CodeProps>>((props, ref) => {
  const CodeElement = stylin<
    CodeElementProps & RefAttributes<CodeElementProps>
  >('code')();

  return <CodeElement {...props} ref={ref} />;
});

Code.displayName = 'Code';

export * from './code.types';
