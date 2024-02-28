import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { QElementProps, QProps } from './q.types';

const QElement = stylin<QElementProps & RefAttributes<QElementProps>>('q')();

export const Q = forwardRef<PropsWithChildren<QProps>>((props, ref) => (
  <QElement {...props} ref={ref} />
));

Q.displayName = 'Q';

export * from './q.types';
