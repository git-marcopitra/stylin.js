import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RubyElementProps, RubyProps } from './ruby.types';

export const stylinRuby = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & RubyElementProps & RefAttributes<RubyElementProps>>('ruby')(
    ...styles
  );

const RubyElement = stylinRuby();

export const Ruby = forwardRef<RubyElementProps, PropsWithChildren<RubyProps>>((props, ref) => (
  <RubyElement {...props} ref={ref} />
));

Ruby.displayName = 'Ruby';

export * from './ruby.types';
