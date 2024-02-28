import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BodyElementProps, BodyProps } from './body.types';

const BodyElement = stylin<BodyElementProps & RefAttributes<BodyElementProps>>(
  'body'
)();

export const Body = forwardRef<PropsWithChildren<BodyProps>>((props, ref) => (
  <BodyElement {...props} ref={ref} />
));

Body.displayName = 'Body';

export * from './body.types';
