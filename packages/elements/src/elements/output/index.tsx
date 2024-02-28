import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OutputElementProps, OutputProps } from './output.types';

export const stylinOutput = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & OutputElementProps & RefAttributes<OutputElementProps>>('option')(
    ...styles
  );

const OutputElement = stylinOutput();

export const Output = forwardRef<OutputElementProps, PropsWithChildren<OutputProps>>(
  (props, ref) => <OutputElement {...props} ref={ref} />
);

Output.displayName = 'Output';

export * from './output.types';
