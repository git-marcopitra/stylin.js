import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LabelElementProps, LabelProps } from './label.types';

const LabelElement = stylin<
  LabelElementProps & RefAttributes<LabelElementProps>
>('label')();

export const Label = forwardRef<PropsWithChildren<LabelProps>>((props, ref) => (
  <LabelElement {...props} ref={ref} />
));

Label.displayName = 'Label';

export * from './label.types';
