import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OutputElementProps, OutputProps } from './output.types';

export const stylinOutput = stylin<
  OutputElementProps & RefAttributes<OutputElementProps>
>('option');

const OutputElement = stylinOutput();

export const Output = forwardRef<PropsWithChildren<OutputProps>>(
  (props, ref) => <OutputElement {...props} ref={ref} />
);

Output.displayName = 'Output';

export * from './output.types';
