import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ProgressElementProps, ProgressProps } from './progress.types';

export const stylinProgress = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ProgressElementProps & RefAttributes<ProgressElementProps>>(
    'progress'
  )(...styles);

const ProgressElement = stylinProgress();

export const Progress = forwardRef<PropsWithChildren<ProgressProps>>(
  (props, ref) => <ProgressElement {...props} ref={ref} />
);

Progress.displayName = 'Progress';

export * from './progress.types';
