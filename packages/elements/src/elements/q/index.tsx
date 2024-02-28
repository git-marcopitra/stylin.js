import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { QElementProps, QProps } from './q.types';

export const stylinQ = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & QElementProps & RefAttributes<QElementProps>>('q')(...styles);

const QElement = stylinQ();

export const Q = forwardRef<QElementProps, PropsWithChildren<QProps>>((props, ref) => (
  <QElement {...props} ref={ref} />
));

Q.displayName = 'Q';

export * from './q.types';
