import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { IElementProps, IProps } from './i.types';

const IElement = stylin<IElementProps & RefAttributes<IElementProps>>('i')();

export const I = forwardRef<PropsWithChildren<IProps>>((props, ref) => (
  <IElement {...props} ref={ref} />
));

I.displayName = 'I';

export * from './i.types';
