import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ObjectElementProps, ObjectProps } from './object.types';

const ObjectElement = stylin<
  ObjectElementProps & RefAttributes<ObjectElementProps>
>('object')();

export const Object = forwardRef<PropsWithChildren<ObjectProps>>(
  (props, ref) => <ObjectElement {...props} ref={ref} />
);

Object.displayName = 'Object';

export * from './object.types';
