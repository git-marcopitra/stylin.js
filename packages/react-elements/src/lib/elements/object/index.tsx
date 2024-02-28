import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ObjectElementProps, ObjectProps } from './object.types';

export const stylinObject = stylin<
  ObjectElementProps & RefAttributes<ObjectElementProps>
>('object');

const ObjectElement = stylinObject();

export const Object = forwardRef<PropsWithChildren<ObjectProps>>(
  (props, ref) => <ObjectElement {...props} ref={ref} />
);

Object.displayName = 'Object';

export * from './object.types';
