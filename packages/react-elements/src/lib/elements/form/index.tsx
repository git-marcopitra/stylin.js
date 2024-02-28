import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FormElementProps, FormProps } from './form.types';

export const stylinForm = stylin<
  FormElementProps & RefAttributes<FormElementProps>
>('form');

const FormElement = stylinForm();

export const Form = forwardRef<PropsWithChildren<FormProps>>((props, ref) => (
  <FormElement {...props} ref={ref} />
));

Form.displayName = 'Form';

export * from './form.types';
