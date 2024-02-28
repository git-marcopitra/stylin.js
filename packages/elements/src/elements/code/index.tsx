import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CodeElementProps, CodeProps } from './code.types';

export const stylinCode = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & CodeElementProps & RefAttributes<CodeElementProps>>('code')(
    ...styles
  );

const CodeElement = stylinCode();

export const Code = forwardRef<PropsWithChildren<CodeProps>>((props, ref) => (
  <CodeElement {...props} ref={ref} />
));

Code.displayName = 'Code';

export * from './code.types';
