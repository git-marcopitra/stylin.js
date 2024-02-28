import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LabelElementProps, LabelProps } from './label.types';

export const stylinLabel = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & LabelElementProps & RefAttributes<LabelElementProps>>('label')(
    ...styles
  );

const LabelElement = stylinLabel();

export const Label = forwardRef<LabelElementProps, PropsWithChildren<LabelProps>>((props, ref) => (
  <LabelElement {...props} ref={ref} />
));

Label.displayName = 'Label';

export * from './label.types';
