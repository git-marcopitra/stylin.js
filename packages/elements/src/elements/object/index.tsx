import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ObjectElementProps, ObjectProps } from './object.types';

export const stylinObject = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ObjectElementProps & RefAttributes<ObjectElementProps>>('object')(
    ...styles
  );

const ObjectElement = stylinObject();

export const Object = forwardRef<ObjectElementProps, PropsWithChildren<ObjectProps>>(
  (props, ref) => <ObjectElement {...props} ref={ref} />
);

Object.displayName = 'Object';

export * from './object.types';
