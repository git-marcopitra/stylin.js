import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CodeElementProps, CodeProps } from './code.types';

export const stylinCode = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & CodeElementProps & RefAttributes<CodeElementProps>>('code')(
    ...styles
  );

const CodeElement = stylinCode();

export const Code = forwardRef<CodeElementProps, PropsWithChildren<CodeProps>>((props, ref) => (
  <CodeElement {...props} ref={ref} />
));

Code.displayName = 'Code';

export * from './code.types';
