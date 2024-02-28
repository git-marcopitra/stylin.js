import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SourceElementProps, SourceProps } from './source.types';

export const stylinSource = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SourceElementProps & RefAttributes<SourceElementProps>>('source')(
    ...styles
  );

const SourceElement = stylinSource();

export const Source = forwardRef<SourceElementProps, PropsWithChildren<SourceProps>>(
  (props, ref) => <SourceElement {...props} ref={ref} />
);

Source.displayName = 'Source';

export * from './source.types';
