import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MarkElementProps, MarkProps } from './mark.types';

export const stylinMark = stylin<
  MarkElementProps & RefAttributes<MarkElementProps>
>('mark');

const MarkElement = stylinMark();

export const Mark = forwardRef<PropsWithChildren<MarkProps>>((props, ref) => (
  <MarkElement {...props} ref={ref} />
));

Mark.displayName = 'Mark';

export * from './mark.types';
