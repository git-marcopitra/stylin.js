import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RubyElementProps, RubyProps } from './ruby.types';

export const stylinRuby = stylin<
  RubyElementProps & RefAttributes<RubyElementProps>
>('ruby');

const RubyElement = stylinRuby();

export const Ruby = forwardRef<PropsWithChildren<RubyProps>>((props, ref) => (
  <RubyElement {...props} ref={ref} />
));

Ruby.displayName = 'Ruby';

export * from './ruby.types';
