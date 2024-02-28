import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BodyElementProps, BodyProps } from './body.types';

export const stylinBody = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & BodyElementProps & RefAttributes<BodyElementProps>>('body')(
    ...styles
  );

const BodyElement = stylinBody();

export const Body = forwardRef<BodyElementProps, PropsWithChildren<BodyProps>>((props, ref) => (
  <BodyElement {...props} ref={ref} />
));

Body.displayName = 'Body';

export * from './body.types';
