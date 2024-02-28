import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SourceElementProps, SourceProps } from './source.types';

export const stylinSource = stylin<
  SourceElementProps & RefAttributes<SourceElementProps>
>('source');

const SourceElement = stylinSource();

export const Source = forwardRef<PropsWithChildren<SourceProps>>(
  (props, ref) => <SourceElement {...props} ref={ref} />
);

Source.displayName = 'Source';

export * from './source.types';
