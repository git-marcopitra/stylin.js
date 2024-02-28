import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LiElementProps, LiProps } from './li.types';

const LiElement = stylin<LiElementProps & RefAttributes<LiElementProps>>(
  'li'
)();

export const Li = forwardRef<PropsWithChildren<LiProps>>((props, ref) => (
  <LiElement {...props} ref={ref} />
));

Li.displayName = 'Li';

export * from './li.types';
