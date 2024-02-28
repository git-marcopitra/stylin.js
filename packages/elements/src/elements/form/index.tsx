import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FormElementProps, FormProps } from './form.types';

export const stylinForm = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FormElementProps & RefAttributes<FormElementProps>>('form')(
    ...styles
  );

const FormElement = stylinForm();

export const Form = forwardRef<FormElementProps, PropsWithChildren<FormProps>>((props, ref) => (
  <FormElement {...props} ref={ref} />
));

Form.displayName = 'Form';

export * from './form.types';
