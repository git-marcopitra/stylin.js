import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SourceElementProps, SourceProps } from './source.types';

const SourceElement = stylin<
  SourceElementProps & RefAttributes<SourceElementProps>
>('source')();

export const Source = forwardRef<PropsWithChildren<SourceProps>>(
  (props, ref) => <SourceElement {...props} ref={ref} />
);

Source.displayName = 'Source';

export * from './source.types';
