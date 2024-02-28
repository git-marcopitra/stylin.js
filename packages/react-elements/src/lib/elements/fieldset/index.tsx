import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FieldsetElementProps, FieldsetProps } from './fieldset.types';

export const stylinFieldset = stylin<
  FieldsetElementProps & RefAttributes<FieldsetElementProps>
>('fieldset');

const FieldsetElement = stylinFieldset();

export const Fieldset = forwardRef<PropsWithChildren<FieldsetProps>>(
  (props, ref) => <FieldsetElement {...props} ref={ref} />
);

Fieldset.displayName = 'Fieldset';

export * from './fieldset.types';
