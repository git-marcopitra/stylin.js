import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, RefAttributes } from 'react';

import { EmbedElementProps, EmbedProps } from './embed.types';

export const stylinEmbed = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & EmbedElementProps & RefAttributes<EmbedElementProps>>('embed')(
    ...styles
  );

const EmbedElement = stylinEmbed();

export const Embed = forwardRef<EmbedElementProps, EmbedProps>((props, ref) => (
  <EmbedElement {...props} ref={ref} />
));

Embed.displayName = 'Embed';

export * from './embed.types';
