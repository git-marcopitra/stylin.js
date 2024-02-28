import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FormElementProps, FormProps } from './form.types';

const FormElement = stylin<FormElementProps & RefAttributes<FormElementProps>>(
  'form'
)();

export const Form = forwardRef<PropsWithChildren<FormProps>>((props, ref) => (
  <FormElement {...props} ref={ref} />
));

Form.displayName = 'Form';

export * from './form.types';
