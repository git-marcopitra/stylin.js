import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TbodyElementProps, TbodyProps } from './tbody.types';

export const stylinTbody = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TbodyElementProps & RefAttributes<TbodyElementProps>>('tbody')(
    ...styles
  );

const TbodyElement = stylinTbody();

export const Tbody = forwardRef<TbodyElementProps, PropsWithChildren<TbodyProps>>((props, ref) => (
  <TbodyElement {...props} ref={ref} />
));

Tbody.displayName = 'Tbody';

export * from './tbody.types';
