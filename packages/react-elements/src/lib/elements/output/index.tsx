import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OutputElementProps, OutputProps } from './output.types';

const OutputElement = stylin<
  OutputElementProps & RefAttributes<OutputElementProps>
>('option')();

export const Output = forwardRef<PropsWithChildren<OutputProps>>(
  (props, ref) => <OutputElement {...props} ref={ref} />
);

Output.displayName = 'Output';

export * from './output.types';
