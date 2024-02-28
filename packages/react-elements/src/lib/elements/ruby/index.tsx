import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RubyElementProps, RubyProps } from './ruby.types';

const RubyElement = stylin<RubyElementProps & RefAttributes<RubyElementProps>>(
  'ruby'
)();

export const Ruby = forwardRef<PropsWithChildren<RubyProps>>((props, ref) => (
  <RubyElement {...props} ref={ref} />
));

Ruby.displayName = 'Ruby';

export * from './ruby.types';
