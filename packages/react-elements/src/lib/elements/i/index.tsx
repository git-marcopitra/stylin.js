import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { IElementProps, IProps } from './i.types';

export const stylinI = stylin<IElementProps & RefAttributes<IElementProps>>(
  'i'
);

const IElement = stylinI();

export const I = forwardRef<PropsWithChildren<IProps>>((props, ref) => (
  <IElement {...props} ref={ref} />
));

I.displayName = 'I';

export * from './i.types';
