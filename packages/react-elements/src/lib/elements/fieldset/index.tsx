import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FieldsetElementProps, FieldsetProps } from './fieldset.types';

const FieldsetElement = stylin<
  FieldsetElementProps & RefAttributes<FieldsetElementProps>
>('fieldset')();

export const Fieldset = forwardRef<PropsWithChildren<FieldsetProps>>(
  (props, ref) => <FieldsetElement {...props} ref={ref} />
);

Fieldset.displayName = 'Fieldset';

export * from './fieldset.types';
