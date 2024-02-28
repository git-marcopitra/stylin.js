import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FieldsetElementProps, FieldsetProps } from './fieldset.types';

export const stylinFieldset = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FieldsetElementProps & RefAttributes<FieldsetElementProps>>(
    'fieldset'
  )(...styles);

const FieldsetElement = stylinFieldset();

export const Fieldset = forwardRef<FieldsetElementProps, PropsWithChildren<FieldsetProps>>(
  (props, ref) => <FieldsetElement {...props} ref={ref} />
);

Fieldset.displayName = 'Fieldset';

export * from './fieldset.types';
