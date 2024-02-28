import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BodyElementProps, BodyProps } from './body.types';

export const stylinBody = stylin<
  BodyElementProps & RefAttributes<BodyElementProps>
>('body');

const BodyElement = stylinBody();

export const Body = forwardRef<PropsWithChildren<BodyProps>>((props, ref) => (
  <BodyElement {...props} ref={ref} />
));

Body.displayName = 'Body';

export * from './body.types';
