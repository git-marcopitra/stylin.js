import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FieldsetElementProps, FieldsetProps } from './fieldset.types';

export const stylinFieldset = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FieldsetElementProps & RefAttributes<FieldsetElementProps>>(
    'fieldset'
  )(...styles);

const FieldsetElement = stylinFieldset();

export const Fieldset = forwardRef<PropsWithChildren<FieldsetProps>>(
  (props, ref) => <FieldsetElement {...props} ref={ref} />
);

Fieldset.displayName = 'Fieldset';

export * from './fieldset.types';
