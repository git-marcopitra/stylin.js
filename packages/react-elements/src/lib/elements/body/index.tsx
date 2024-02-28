import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BodyElementProps, BodyProps } from './body.types';

export const Body = forwardRef<PropsWithChildren<BodyProps>>((props, ref) => {
  const BodyElement = stylin<
    BodyElementProps & RefAttributes<BodyElementProps>
  >('body')();

  return <BodyElement {...props} ref={ref} />;
});

Body.displayName = 'Body';

export * from './body.types';
